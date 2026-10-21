import { useState, useEffect } from "react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import projectProfileDetails from "@/data/projectProfileDetails.json";
import projectPhotos from "@/data/projectPhotos.json";
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
  status?: "Completed" | "Ongoing" | string;
  systemUsed?: string;
  image: string;
  gallery: string[];
  description: string;
  challenge: string;
  outcome: string;
  features: string[];
  isAwardWinner: boolean;
  award?: string;
}

/** Safely parse a JSONB field that may arrive as a string or native array */
function parseJsonArray(value: unknown): string[] {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
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
    status: row.status ?? "Completed",
    systemUsed: row.system_used ?? row.systemUsed ?? "",
    image: projectPhotos[row.slug as keyof typeof projectPhotos]?.[0] ?? row.image,
    gallery: projectPhotos[row.slug as keyof typeof projectPhotos] ?? parseJsonArray(row.gallery),
    description: row.description,
    challenge: row.challenge ?? "",
    outcome: row.outcome ?? "",
    features: parseJsonArray(row.features),
    isAwardWinner: row.is_award_winner ?? false,
    award: row.award,
    ...projectProfileDetails[row.slug as keyof typeof projectProfileDetails],
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
          // Published rows enrich the catalogue without hiding profile projects
          // that have not yet been added to the CMS.
          const merged = new Map(getStaticProjects().map((project) => [project.slug, project]));
          data.map(mapSupabaseRow).forEach((project) => merged.set(project.slug, project));
          setProjects(Array.from(merged.values()));
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
  return { project, loading: loading && !project };
}
