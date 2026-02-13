-- Hybrid quotation value estimation engine schema
-- Final Price = Material Cost (live rates) + Learned Work Cost (historical data)

create table if not exists material_rates (
  material text primary key,
  unit text not null,
  rate numeric(12,2) not null check (rate >= 0),
  updated_at timestamptz not null default now()
);

create table if not exists project_history (
  id bigint generated always as identity primary key,
  project_type text not null,
  area numeric(12,2) not null check (area > 0),
  material_cost numeric(14,2) not null check (material_cost >= 0),
  final_price numeric(14,2) not null check (final_price >= material_cost)
);

-- Learned work-rate view (₹/sqft)
create or replace view project_work_rates as
select
  project_type,
  count(*) as sample_size,
  avg((final_price - material_cost) / nullif(area, 0)) as work_rate
from project_history
group by project_type;
