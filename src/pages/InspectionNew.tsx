import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { InspectionForm } from "@/components/inspection/InspectionForm";
import { useInspections } from "@/hooks/useInspections";
import type { InspectionFormData } from "@/types/inspection";

export default function InspectionNew() {
  const navigate = useNavigate();
  const { addInspection } = useInspections();

  const handleSubmit = (data: InspectionFormData, status: "draft" | "submitted") => {
    addInspection(data, status);
    navigate("/inspection");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/inspection")}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-lg font-bold">New Inspection</h1>
              <p className="text-xs text-muted-foreground">
                Fill in the daily site report
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-4">
        <InspectionForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
