import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://gcmrhalbkvoqlclrxjya.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjbXJoYWxia3ZvcWxjbHJ4anlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2OTk5MDIsImV4cCI6MjA5NDI3NTkwMn0.XjHjEy-NdW0pCM_xZoA38uwOR4nZC_DnxBSzNPp1HkQ";

export const isSupabaseConfigured = true;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
