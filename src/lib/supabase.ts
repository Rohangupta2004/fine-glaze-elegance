import { createClient } from "@supabase/supabase-js";

// Fine Glaze Supabase project: "fineglazes" (gcmrhalbkvoqlclrxjya)
const supabaseUrl = "https://gcmrhalbkvoqlclrxjya.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjbXJoYWxia3ZvcWxjbHJ4anlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2OTk5MDIsImV4cCI6MjA5NDI3NTkwMn0.XjHjEy-NdW0pCM_xZoA38uwOR4nZC_DnxBSzNPp1HkQ";

export const isSupabaseConfigured = true;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
