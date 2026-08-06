import { useState, useEffect, useCallback } from "react";
const STORAGE_KEY = "fineglaze_inspections";
function loadInspections() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}
function saveInspections(inspections) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inspections));
}
function useInspections() {
  const [inspections, setInspections] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInspections(loadInspections());
    setLoading(false);
  }, []);
  const addInspection = useCallback(
    (data, status = "submitted") => {
      const newInspection = {
        ...data,
        id: crypto.randomUUID(),
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        status
      };
      const updated = [newInspection, ...inspections];
      setInspections(updated);
      saveInspections(updated);
      return newInspection;
    },
    [inspections]
  );
  const updateInspection = useCallback(
    (id, data) => {
      const updated = inspections.map(
        (insp) => insp.id === id ? { ...insp, ...data } : insp
      );
      setInspections(updated);
      saveInspections(updated);
    },
    [inspections]
  );
  const deleteInspection = useCallback(
    (id) => {
      const updated = inspections.filter((insp) => insp.id !== id);
      setInspections(updated);
      saveInspections(updated);
    },
    [inspections]
  );
  const getInspection = useCallback(
    (id) => inspections.find((insp) => insp.id === id),
    [inspections]
  );
  return {
    inspections,
    loading,
    addInspection,
    updateInspection,
    deleteInspection,
    getInspection
  };
}
export {
  useInspections as u
};
