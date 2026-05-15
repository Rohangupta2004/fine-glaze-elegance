import { useParams, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, CheckCircle } from "lucide-react";
import { useInspections } from "@/hooks/useInspections";
import { InspectionReport } from "@/components/inspection/InspectionReport";
import { useToast } from "@/hooks/use-toast";

export default function InspectionView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getInspection, updateInspection } = useInspections();
  const reportRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const inspection = id ? getInspection(id) : undefined;

  if (!inspection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-lg font-semibold">Inspection not found</h2>
          <p className="text-muted-foreground text-sm mt-1">
            This report may have been deleted.
          </p>
          <Button
            className="mt-4"
            onClick={() => navigate("/inspection")}
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  const handleMarkReviewed = () => {
    if (id) {
      updateInspection(id, { status: "reviewed" });
      toast({
        title: "Marked as reviewed ✅",
        description: "This inspection has been marked as reviewed.",
      });
    }
  };

  const statusColors: Record<string, string> = {
    draft: "bg-yellow-100 text-yellow-800",
    submitted: "bg-blue-100 text-blue-800",
    reviewed: "bg-green-100 text-green-800",
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header - hidden during print */}
      <div className="bg-white border-b sticky top-0 z-40 print:hidden">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/inspection")}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-bold">Inspection Report</h1>
                  <Badge
                    variant="outline"
                    className={statusColors[inspection.status]}
                  >
                    {inspection.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {inspection.project_name}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {inspection.status !== "reviewed" && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleMarkReviewed}
                >
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Mark Reviewed
                </Button>
              )}
              <Button size="sm" onClick={handlePrint}>
                <Download className="h-4 w-4 mr-1" />
                Print / PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div className="max-w-4xl mx-auto px-4 py-6 print:p-0 print:max-w-none">
        <div className="bg-white rounded-lg shadow-sm print:shadow-none print:rounded-none">
          <InspectionReport ref={reportRef} inspection={inspection} />
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          .print\\:hidden { display: none !important; }
          [class*="InspectionReport"], [class*="InspectionReport"] * {
            visibility: visible;
          }
          @page { margin: 1cm; }
        }
      `}</style>
    </div>
  );
}
