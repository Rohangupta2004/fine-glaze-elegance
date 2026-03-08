-- Admin/role-based authorization policies for Fine Glaze portal.
-- Apply this script in Supabase SQL editor (or migration pipeline).

begin;

create or replace function public.is_admin_user()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
    or (auth.jwt() -> 'app_metadata' ->> 'is_admin')::boolean,
    false
  )
  or exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and (
        p.role = 'admin'
        or coalesce(p.is_admin, false)
      )
  );
$$;

grant execute on function public.is_admin_user() to authenticated;

alter table public."Clientproject" enable row level security;
alter table public."ProjectFiles" enable row level security;

-- Reset existing policies so authorization behavior is deterministic.
drop policy if exists "admin manage client projects" on public."Clientproject";
drop policy if exists "client read own project" on public."Clientproject";

drop policy if exists "admin manage project files" on public."ProjectFiles";
drop policy if exists "client read own project files" on public."ProjectFiles";
drop policy if exists "client update own project files" on public."ProjectFiles";

drop policy if exists "admin manage project-files bucket" on storage.objects;
drop policy if exists "client read own project-files objects" on storage.objects;
drop policy if exists "client upload own project-files objects" on storage.objects;

create policy "admin manage client projects"
on public."Clientproject"
for all
to authenticated
using (public.is_admin_user())
with check (public.is_admin_user());

create policy "client read own project"
on public."Clientproject"
for select
to authenticated
using (client_email = auth.jwt() ->> 'email');

create policy "admin manage project files"
on public."ProjectFiles"
for all
to authenticated
using (public.is_admin_user())
with check (public.is_admin_user());

create policy "client read own project files"
on public."ProjectFiles"
for select
to authenticated
using (
  exists (
    select 1
    from public."Clientproject" cp
    where cp.id = "ProjectFiles".project_id
      and cp.client_email = auth.jwt() ->> 'email'
  )
);

create policy "client update own project files"
on public."ProjectFiles"
for update
to authenticated
using (
  exists (
    select 1
    from public."Clientproject" cp
    where cp.id = "ProjectFiles".project_id
      and cp.client_email = auth.jwt() ->> 'email'
  )
)
with check (
  exists (
    select 1
    from public."Clientproject" cp
    where cp.id = "ProjectFiles".project_id
      and cp.client_email = auth.jwt() ->> 'email'
  )
);

create policy "admin manage project-files bucket"
on storage.objects
for all
to authenticated
using (bucket_id = 'project-files' and public.is_admin_user())
with check (bucket_id = 'project-files' and public.is_admin_user());

create policy "client read own project-files objects"
on storage.objects
for select
to authenticated
using (
  bucket_id = 'project-files'
  and exists (
    select 1
    from public."Clientproject" cp
    where cp.id::text = split_part(storage.objects.name, '/', 1)
      and cp.client_email = auth.jwt() ->> 'email'
  )
);

create policy "client upload own project-files objects"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'project-files'
  and exists (
    select 1
    from public."Clientproject" cp
    where cp.id::text = split_part(storage.objects.name, '/', 1)
      and cp.client_email = auth.jwt() ->> 'email'
  )
);

commit;
