import { forwardRef } from "react";
import { format } from "date-fns";
import type { Inspection, SafetyChecklist } from "@/types/inspection";

interface InspectionReportProps {
  inspection: Inspection;
}

const safetyLabels: Record<keyof SafetyChecklist, string> = {
  ppe_worn: "PPE worn by all workers",
  scaffolding_secure: "Scaffolding secure & inspected",
  fire_extinguisher_available: "Fire extinguisher available",
  first_aid_available: "First aid kit available",
  safety_nets_installed: "Safety nets installed",
  housekeeping_ok: "Good housekeeping maintained",
  electrical_safety: "Electrical safety checked",
  signage_displayed: "Safety signage displayed",
};

const severityEmoji: Record<string, string> = {
  low: "🟢",
  medium: "🟡",
  high: "🟠",
  critical: "🔴",
};

export const InspectionReport = forwardRef<HTMLDivElement, InspectionReportProps>(
  ({ inspection }, ref) => {
    const dateStr = format(new Date(inspection.inspection_date), "dd MMMM yyyy");
    const safetyPassed = Object.values(inspection.safety_checklist).filter(
      Boolean
    ).length;
    const safetyTotal = Object.keys(inspection.safety_checklist).length;

    return (
      <div
        ref={ref}
        className="bg-white text-black p-8 max-w-[800px] mx-auto"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {/* Header */}
        <div className="border-b-4 border-blue-800 pb-4 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-blue-900">
                FINE GLAZE
              </h1>
              <p className="text-sm text-gray-500">
                Facade & Glazing Solutions
              </p>
            </div>
            <div className="text-right">
              <h2 className="text-lg font-bold text-blue-800">
                DAILY SITE INSPECTION REPORT
              </h2>
              <p className="text-sm text-gray-500">
                Report ID: {inspection.id.slice(0, 8).toUpperCase()}
              </p>
            </div>
          </div>
        </div>

        {/* Project Info Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="space-y-2">
            <div>
              <span className="text-xs text-gray-500 uppercase">Project</span>
              <p className="font-semibold">{inspection.project_name}</p>
            </div>
            <div>
              <span className="text-xs text-gray-500 uppercase">Location</span>
              <p>{inspection.site_location}</p>
            </div>
            <div>
              <span className="text-xs text-gray-500 uppercase">
                Supervisor
              </span>
              <p>
                {inspection.supervisor_name}
                {inspection.supervisor_phone &&
                  ` | ${inspection.supervisor_phone}`}
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <span className="text-xs text-gray-500 uppercase">Date</span>
              <p className="font-semibold">{dateStr}</p>
            </div>
            <div>
              <span className="text-xs text-gray-500 uppercase">
                Shift / Weather
              </span>
              <p className="capitalize">
                {inspection.shift} | {inspection.weather || "Not recorded"}
              </p>
            </div>
            <div>
              <span className="text-xs text-gray-500 uppercase">
                Workers on Site
              </span>
              <p>{inspection.workers_present}</p>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-blue-800 uppercase border-b mb-2 pb-1">
            Overall Progress
          </h3>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${inspection.overall_progress}%` }}
              />
            </div>
            <span className="font-bold text-lg">
              {inspection.overall_progress}%
            </span>
          </div>
        </div>

        {/* Work Completed */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-blue-800 uppercase border-b mb-2 pb-1">
            Work Completed Today
          </h3>
          <p className="whitespace-pre-wrap text-sm">
            {inspection.work_completed || "No details provided."}
          </p>
        </div>

        {/* Work Planned */}
        {inspection.work_planned_tomorrow && (
          <div className="mb-6">
            <h3 className="text-sm font-bold text-blue-800 uppercase border-b mb-2 pb-1">
              Work Planned for Tomorrow
            </h3>
            <p className="whitespace-pre-wrap text-sm">
              {inspection.work_planned_tomorrow}
            </p>
          </div>
        )}

        {/* Issues */}
        {inspection.issues.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-bold text-blue-800 uppercase border-b mb-2 pb-1">
              Issues & Observations ({inspection.issues.length})
            </h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-2 font-medium">#</th>
                  <th className="text-left p-2 font-medium">Description</th>
                  <th className="text-left p-2 font-medium">Severity</th>
                </tr>
              </thead>
              <tbody>
                {inspection.issues.map((issue, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="p-2">{idx + 1}</td>
                    <td className="p-2">{issue.description}</td>
                    <td className="p-2 capitalize">
                      {severityEmoji[issue.severity]} {issue.severity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Materials Used */}
        {inspection.materials_used.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-bold text-blue-800 uppercase border-b mb-2 pb-1">
              Materials Used ({inspection.materials_used.length})
            </h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-2 font-medium">#</th>
                  <th className="text-left p-2 font-medium">Material</th>
                  <th className="text-left p-2 font-medium">Quantity</th>
                  <th className="text-left p-2 font-medium">Unit</th>
                </tr>
              </thead>
              <tbody>
                {inspection.materials_used.map((mat, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="p-2">{idx + 1}</td>
                    <td className="p-2">{mat.name}</td>
                    <td className="p-2">{mat.quantity}</td>
                    <td className="p-2">{mat.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Safety Checklist */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-blue-800 uppercase border-b mb-2 pb-1">
            Safety Checklist ({safetyPassed}/{safetyTotal})
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {(
              Object.keys(inspection.safety_checklist) as (keyof SafetyChecklist)[]
            ).map((key) => (
              <div key={key} className="flex items-center gap-2">
                <span>
                  {inspection.safety_checklist[key] ? "✅" : "❌"}
                </span>
                <span>{safetyLabels[key]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Notes */}
        {inspection.notes && (
          <div className="mb-6">
            <h3 className="text-sm font-bold text-blue-800 uppercase border-b mb-2 pb-1">
              Additional Notes
            </h3>
            <p className="whitespace-pre-wrap text-sm">{inspection.notes}</p>
          </div>
        )}

        {/* Footer */}
        <div className="border-t-2 border-gray-300 pt-4 mt-8">
          <div className="flex justify-between text-xs text-gray-500">
            <span>
              Generated on{" "}
              {format(new Date(inspection.created_at), "dd MMM yyyy, hh:mm a")}
            </span>
            <span>Fine Glaze — Facade & Glazing Solutions, Pune</span>
          </div>
          <div className="text-xs text-gray-400 mt-1">
            info@fineglaze.com | +91-8369233566
          </div>
        </div>
      </div>
    );
  }
);

InspectionReport.displayName = "InspectionReport";
