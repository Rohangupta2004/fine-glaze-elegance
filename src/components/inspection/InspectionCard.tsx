import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Calendar,
  User,
  AlertTriangle,
  Eye,
  Trash2,
  Clock,
} from "lucide-react";
import type { Inspection } from "@/types/inspection";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

interface InspectionCardProps {
  inspection: Inspection;
  onDelete?: (id: string) => void;
}

const statusColors: Record<string, string> = {
  draft: "bg-yellow-100 text-yellow-800 border-yellow-300",
  submitted: "bg-blue-100 text-blue-800 border-blue-300",
  reviewed: "bg-green-100 text-green-800 border-green-300",
};

const severityCount = (inspection: Inspection) => {
  const critical = inspection.issues.filter(
    (i) => i.severity === "critical"
  ).length;
  const high = inspection.issues.filter((i) => i.severity === "high").length;
  return { critical, high, total: inspection.issues.length };
};

export function InspectionCard({ inspection, onDelete }: InspectionCardProps) {
  const navigate = useNavigate();
  const issues = severityCount(inspection);
  const dateStr = format(new Date(inspection.inspection_date), "dd MMM yyyy");

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1 min-w-0">
            <CardTitle className="text-base font-semibold truncate">
              {inspection.project_name}
            </CardTitle>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{inspection.site_location}</span>
            </div>
          </div>
          <Badge variant="outline" className={statusColors[inspection.status]}>
            {inspection.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {dateStr}
          </span>
          <span className="flex items-center gap-1">
            <User className="h-3.5 w-3.5" />
            {inspection.supervisor_name}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {inspection.shift}
          </span>
        </div>

        {/* Progress bar */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{inspection.overall_progress}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all"
              style={{ width: `${inspection.overall_progress}%` }}
            />
          </div>
        </div>

        {/* Issues summary */}
        {issues.total > 0 && (
          <div className="flex items-center gap-2 text-sm">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <span>
              {issues.total} issue{issues.total !== 1 ? "s" : ""}
              {issues.critical > 0 && (
                <span className="text-red-600 font-medium">
                  {" "}
                  ({issues.critical} critical)
                </span>
              )}
              {issues.high > 0 && (
                <span className="text-orange-600 font-medium">
                  {" "}
                  ({issues.high} high)
                </span>
              )}
            </span>
          </div>
        )}

        {/* Workers + Materials summary */}
        <div className="flex gap-4 text-xs text-muted-foreground">
          <span>{inspection.workers_present} workers on site</span>
          <span>{inspection.materials_used.length} materials logged</span>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          <Button
            size="sm"
            variant="outline"
            className="flex-1"
            onClick={() => navigate(`/inspection/${inspection.id}`)}
          >
            <Eye className="h-4 w-4 mr-1" />
            View Report
          </Button>
          {onDelete && (
            <Button
              size="sm"
              variant="ghost"
              className="text-destructive hover:text-destructive"
              onClick={() => onDelete(inspection.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
