-- Run once in the Supabase SQL editor.
ALTER TABLE contact_leads
  ADD COLUMN IF NOT EXISTS city text,
  ADD COLUMN IF NOT EXISTS approx_area text,
  ADD COLUMN IF NOT EXISTS preferred_day text,
  ADD COLUMN IF NOT EXISTS preferred_slot text,
  ADD COLUMN IF NOT EXISTS prefers_callback boolean;

ALTER TABLE contact_leads ALTER COLUMN email DROP NOT NULL;
ALTER TABLE contact_leads ALTER COLUMN message DROP NOT NULL;
ALTER TABLE contact_leads ALTER COLUMN project_type DROP NOT NULL;
