import { useState, useEffect, useCallback } from "react";
import type { Inspection, InspectionFormData } from "@/types/inspection";

const STORAGE_KEY = "fineglaze_inspections";

function loadInspections(): Inspection[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveInspections(inspections: Inspection[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inspections));
}

export function useInspections() {
  const [inspections, setInspections] = useState<Inspection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInspections(loadInspections());
    setLoading(false);
  }, []);

  const addInspection = useCallback(
    (data: InspectionFormData, status: "draft" | "submitted" = "submitted") => {
      const newInspection: Inspection = {
        ...data,
        id: crypto.randomUUID(),
        created_at: new Date().toISOString(),
        status,
      };
      const updated = [newInspection, ...inspections];
      setInspections(updated);
      saveInspections(updated);
      return newInspection;
    },
    [inspections]
  );

  const updateInspection = useCallback(
    (id: string, data: Partial<Inspection>) => {
      const updated = inspections.map((insp) =>
        insp.id === id ? { ...insp, ...data } : insp
      );
      setInspections(updated);
      saveInspections(updated);
    },
    [inspections]
  );

  const deleteInspection = useCallback(
    (id: string) => {
      const updated = inspections.filter((insp) => insp.id !== id);
      setInspections(updated);
      saveInspections(updated);
    },
    [inspections]
  );

  const getInspection = useCallback(
    (id: string) => inspections.find((insp) => insp.id === id),
    [inspections]
  );

  return {
    inspections,
    loading,
    addInspection,
    updateInspection,
    deleteInspection,
    getInspection,
  };
}
