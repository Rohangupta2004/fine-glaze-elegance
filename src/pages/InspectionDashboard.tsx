import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
  Plus,
  Search,
  ClipboardList,
  AlertTriangle,
  Users,
  TrendingUp,
  ArrowLeft,
} from "lucide-react";
import { InspectionCard } from "@/components/inspection/InspectionCard";
import { useInspections } from "@/hooks/useInspections";

export default function InspectionDashboard() {
  const navigate = useNavigate();
  const { inspections, loading, deleteInspection } = useInspections();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filtered = inspections.filter((insp) => {
    const matchesSearch =
      !search ||
      insp.project_name.toLowerCase().includes(search.toLowerCase()) ||
      insp.site_location.toLowerCase().includes(search.toLowerCase()) ||
      insp.supervisor_name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || insp.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Stats
  const totalInspections = inspections.length;
  const totalIssues = inspections.reduce(
    (sum, i) => sum + i.issues.length,
    0
  );
  const criticalIssues = inspections.reduce(
    (sum, i) =>
      sum + i.issues.filter((iss) => iss.severity === "critical").length,
    0
  );
  const avgWorkers =
    inspections.length > 0
      ? Math.round(
          inspections.reduce((sum, i) => sum + i.workers_present, 0) /
            inspections.length
        )
      : 0;
  const avgProgress =
    inspections.length > 0
      ? Math.round(
          inspections.reduce((sum, i) => sum + i.overall_progress, 0) /
            inspections.length
        )
      : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">FG</span>
              </div>
              <div>
                <h1 className="text-lg font-bold">Site Inspections</h1>
                <p className="text-xs text-muted-foreground">
                  Fine Glaze Daily Reports
                </p>
              </div>
            </div>
            <Button onClick={() => navigate("/inspection/new")} size="sm">
              <Plus className="h-4 w-4 mr-1" />
              New Report
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-4 space-y-4">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Card>
            <CardContent className="pt-4 pb-3 px-4">
              <div className="flex items-center gap-2">
                <ClipboardList className="h-4 w-4 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold">{totalInspections}</p>
                  <p className="text-xs text-muted-foreground">Inspections</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 pb-3 px-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                <div>
                  <p className="text-2xl font-bold">
                    {totalIssues}
                    {criticalIssues > 0 && (
                      <span className="text-sm text-red-500 ml-1">
                        ({criticalIssues}🔴)
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground">Issues</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 pb-3 px-4">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-green-600" />
                <div>
                  <p className="text-2xl font-bold">{avgWorkers}</p>
                  <p className="text-xs text-muted-foreground">Avg. Workers</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 pb-3 px-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold">{avgProgress}%</p>
                  <p className="text-xs text-muted-foreground">Avg. Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects, locations..."
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="draft">Drafts</SelectItem>
              <SelectItem value="submitted">Submitted</SelectItem>
              <SelectItem value="reviewed">Reviewed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Inspection Cards */}
        {loading ? (
          <div className="text-center py-12 text-muted-foreground">
            Loading inspections...
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12">
            <ClipboardList className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
            <h3 className="font-semibold text-lg">No inspections yet</h3>
            <p className="text-muted-foreground text-sm mt-1">
              {inspections.length === 0
                ? "Start by creating your first site inspection report."
                : "No inspections match your current filters."}
            </p>
            {inspections.length === 0 && (
              <Button
                className="mt-4"
                onClick={() => navigate("/inspection/new")}
              >
                <Plus className="h-4 w-4 mr-2" />
                Create First Report
              </Button>
            )}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {filtered.map((inspection) => (
              <InspectionCard
                key={inspection.id}
                inspection={inspection}
                onDelete={deleteInspection}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
