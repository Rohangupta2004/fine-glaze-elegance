-- ============================================================
-- Fine Glaze — Supabase Migration 001
-- Creates: contact_leads, projects tables
-- Run this in Supabase SQL Editor after un-pausing the project
-- ============================================================

-- ─────────────────────────────────────────────────────────────
-- 1. CONTACT LEADS — stores every website enquiry
-- ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS contact_leads (
  id            uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at    timestamptz DEFAULT now(),
  name          text NOT NULL,
  email         text NOT NULL,
  phone         text NOT NULL,
  project_type  text NOT NULL,
  message       text NOT NULL,
  source        text DEFAULT 'website',
  status        text DEFAULT 'new'  -- new | contacted | converted | closed
);

-- Allow anon inserts (website visitors) but not reads
ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
  ON contact_leads FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can read leads"
  ON contact_leads FOR SELECT
  TO authenticated
  USING (true);

-- ─────────────────────────────────────────────────────────────
-- 2. PROJECTS — dynamic portfolio (optional, for future use)
-- ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS projects (
  id            uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at    timestamptz DEFAULT now(),
  slug          text UNIQUE NOT NULL,
  title         text NOT NULL,
  location      text NOT NULL,
  category      text NOT NULL DEFAULT 'corporate',  -- corporate | residential | award
  year          text NOT NULL,
  client        text NOT NULL,
  scope         text NOT NULL,
  image         text NOT NULL,
  gallery       jsonb DEFAULT '[]'::jsonb,
  description   text NOT NULL,
  challenge     text,
  outcome       text,
  features      jsonb DEFAULT '[]'::jsonb,
  is_award_winner boolean DEFAULT false,
  award         text,
  sort_order    int DEFAULT 0,
  is_published  boolean DEFAULT true
);

-- Public read, authenticated write
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published projects"
  ON projects FOR SELECT
  TO anon
  USING (is_published = true);

CREATE POLICY "Authenticated users can manage projects"
  ON projects FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Index for sorting
CREATE INDEX IF NOT EXISTS idx_projects_sort ON projects (sort_order, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects (category);
