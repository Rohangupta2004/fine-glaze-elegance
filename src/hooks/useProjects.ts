import { useState, useEffect } from "react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { projectsData } from "@/data/projects";

export interface Project {
  id: number;
  slug: string;
  title: string;
  location: string;
  category: string;
  year: string;
  client: string;
  scope: string;
  image: string;
  gallery: string[];
  description: string;
  challenge: string;
  outcome: string;
  features: string[];
  isAwardWinner: boolean;
  award?: string;
}

/** Convert static projectsData into the same shape */
function getStaticProjects(): Project[] {
  return Object.entries(projectsData).map(([slug, p]) => ({
    slug,
    ...p,
  }));
}

/** Convert a Supabase row to our Project type */
function mapSupabaseRow(row: any): Project {
  return {
    id: row.sort_order ?? 0,
    slug: row.slug,
    title: row.title,
    location: row.location,
    category: row.category,
    year: row.year,
    client: row.client,
    scope: row.scope,
    image: row.image,
    gallery: row.gallery ?? [],
    description: row.description,
    challenge: row.challenge ?? "",
    outcome: row.outcome ?? "",
    features: row.features ?? [],
    isAwardWinner: row.is_award_winner ?? false,
    award: row.award,
  };
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(getStaticProjects());
  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState<"static" | "supabase">("static");

  useEffect(() => {
    if (!isSupabaseConfigured) return;

    let cancelled = false;
    setLoading(true);

    (async () => {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .eq("is_published", true)
          .order("sort_order", { ascending: true });

        if (!cancelled && data && data.length > 0 && !error) {
          setProjects(data.map(mapSupabaseRow));
          setSource("supabase");
        }
        // If Supabase returns empty or errors, keep static data
      } catch {
        // Supabase unavailable — use static fallback (already set)
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return { projects, loading, source };
}

export function useProject(slug: string | undefined) {
  const { projects, loading } = useProjects();
  const project = slug ? projects.find((p) => p.slug === slug) : undefined;
  return { project, loading };
}
