import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Save, Send, ChevronDown, ChevronUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type {
  InspectionFormData,
  IssueObservation,
  MaterialUsed,
  SafetyChecklist,
} from "@/types/inspection";
import {
  WEATHER_OPTIONS,
  MATERIAL_UNITS,
  COMMON_MATERIALS,
} from "@/types/inspection";

interface InspectionFormProps {
  onSubmit: (data: InspectionFormData, status: "draft" | "submitted") => void;
}

const defaultSafety: SafetyChecklist = {
  ppe_worn: false,
  scaffolding_secure: false,
  fire_extinguisher_available: false,
  first_aid_available: false,
  safety_nets_installed: false,
  housekeeping_ok: false,
  electrical_safety: false,
  signage_displayed: false,
};

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

export function InspectionForm({ onSubmit }: InspectionFormProps) {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Section collapse state
  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    work: true,
    issues: false,
    materials: false,
    safety: false,
    summary: false,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Form state
  const [projectName, setProjectName] = useState("");
  const [siteLocation, setSiteLocation] = useState("");
  const [inspectionDate, setInspectionDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [weather, setWeather] = useState("");
  const [supervisorName, setSupervisorName] = useState("");
  const [supervisorPhone, setSupervisorPhone] = useState("");
  const [shift, setShift] = useState<"morning" | "afternoon" | "night">(
    "morning"
  );
  const [workersPresent, setWorkersPresent] = useState(0);
  const [workCompleted, setWorkCompleted] = useState("");
  const [workPlannedTomorrow, setWorkPlannedTomorrow] = useState("");
  const [issues, setIssues] = useState<IssueObservation[]>([]);
  const [materials, setMaterials] = useState<MaterialUsed[]>([]);
  const [safety, setSafety] = useState<SafetyChecklist>(defaultSafety);
  const [overallProgress, setOverallProgress] = useState(0);
  const [notes, setNotes] = useState("");

  const addIssue = () => {
    setIssues([...issues, { description: "", severity: "low" }]);
    if (!expandedSections.issues)
      setExpandedSections((p) => ({ ...p, issues: true }));
  };

  const removeIssue = (index: number) => {
    setIssues(issues.filter((_, i) => i !== index));
  };

  const updateIssue = (index: number, field: string, value: string) => {
    const updated = [...issues];
    updated[index] = { ...updated[index], [field]: value };
    setIssues(updated);
  };

  const addMaterial = () => {
    setMaterials([...materials, { name: "", quantity: 0, unit: "nos" }]);
    if (!expandedSections.materials)
      setExpandedSections((p) => ({ ...p, materials: true }));
  };

  const removeMaterial = (index: number) => {
    setMaterials(materials.filter((_, i) => i !== index));
  };

  const updateMaterial = (index: number, field: string, value: string | number) => {
    const updated = [...materials];
    updated[index] = { ...updated[index], [field]: value };
    setMaterials(updated);
  };

  const toggleSafety = (key: keyof SafetyChecklist) => {
    setSafety((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const buildFormData = (): InspectionFormData => ({
    project_name: projectName,
    site_location: siteLocation,
    inspection_date: inspectionDate,
    weather,
    supervisor_name: supervisorName,
    supervisor_phone: supervisorPhone,
    shift,
    workers_present: workersPresent,
    work_completed: workCompleted,
    work_planned_tomorrow: workPlannedTomorrow,
    issues: issues.filter((i) => i.description.trim()),
    materials_used: materials.filter((m) => m.name.trim()),
    safety_checklist: safety,
    overall_progress: overallProgress,
    photos: [],
    notes,
  });

  const validate = (): boolean => {
    if (!projectName.trim()) {
      toast({
        title: "Missing field",
        description: "Project name is required",
        variant: "destructive",
      });
      return false;
    }
    if (!siteLocation.trim()) {
      toast({
        title: "Missing field",
        description: "Site location is required",
        variant: "destructive",
      });
      return false;
    }
    if (!supervisorName.trim()) {
      toast({
        title: "Missing field",
        description: "Supervisor name is required",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = (status: "draft" | "submitted") => {
    if (status === "submitted" && !validate()) return;
    onSubmit(buildFormData(), status);
    toast({
      title: status === "draft" ? "Draft saved!" : "Report submitted!",
      description:
        status === "draft"
          ? "You can continue editing later."
          : "The daily inspection report has been logged.",
    });
    navigate("/inspection");
  };

  const SectionHeader = ({
    title,
    section,
    badge,
  }: {
    title: string;
    section: keyof typeof expandedSections;
    badge?: string;
  }) => (
    <button
      type="button"
      onClick={() => toggleSection(section)}
      className="flex items-center justify-between w-full text-left"
    >
      <div className="flex items-center gap-2">
        <CardTitle className="text-base">{title}</CardTitle>
        {badge && (
          <Badge variant="secondary" className="text-xs">
            {badge}
          </Badge>
        )}
      </div>
      {expandedSections[section] ? (
        <ChevronUp className="h-4 w-4 text-muted-foreground" />
      ) : (
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      )}
    </button>
  );

  return (
    <div className="space-y-4 pb-24">
      {/* Basic Info */}
      <Card>
        <CardHeader className="pb-3">
          <SectionHeader title="📋 Basic Information" section="basic" />
        </CardHeader>
        {expandedSections.basic && (
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="project">Project Name *</Label>
              <Input
                id="project"
                placeholder="e.g. Embassy 247 Glass Replacement"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="location">Site Location *</Label>
              <Input
                id="location"
                placeholder="e.g. Vikhroli, Mumbai"
                value={siteLocation}
                onChange={(e) => setSiteLocation(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={inspectionDate}
                  onChange={(e) => setInspectionDate(e.target.value)}
                />
              </div>
              <div>
                <Label>Weather</Label>
                <Select value={weather} onValueChange={setWeather}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {WEATHER_OPTIONS.map((w) => (
                      <SelectItem key={w} value={w}>
                        {w}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="supervisor">Supervisor Name *</Label>
                <Input
                  id="supervisor"
                  placeholder="Your name"
                  value={supervisorName}
                  onChange={(e) => setSupervisorName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91-XXXXXXXXXX"
                  value={supervisorPhone}
                  onChange={(e) => setSupervisorPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Shift</Label>
                <Select
                  value={shift}
                  onValueChange={(v) =>
                    setShift(v as "morning" | "afternoon" | "night")
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">🌅 Morning</SelectItem>
                    <SelectItem value="afternoon">☀️ Afternoon</SelectItem>
                    <SelectItem value="night">🌙 Night</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="workers">Workers Present</Label>
                <Input
                  id="workers"
                  type="number"
                  min={0}
                  value={workersPresent}
                  onChange={(e) => setWorkersPresent(Number(e.target.value))}
                />
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Work Details */}
      <Card>
        <CardHeader className="pb-3">
          <SectionHeader title="🔨 Work Details" section="work" />
        </CardHeader>
        {expandedSections.work && (
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="completed">Work Completed Today</Label>
              <Textarea
                id="completed"
                placeholder="Describe what work was done today..."
                rows={4}
                value={workCompleted}
                onChange={(e) => setWorkCompleted(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="planned">Work Planned for Tomorrow</Label>
              <Textarea
                id="planned"
                placeholder="What's planned for the next working day..."
                rows={3}
                value={workPlannedTomorrow}
                onChange={(e) => setWorkPlannedTomorrow(e.target.value)}
              />
            </div>
            <div>
              <Label>Overall Progress: {overallProgress}%</Label>
              <Slider
                value={[overallProgress]}
                max={100}
                step={5}
                onValueChange={([v]) => setOverallProgress(v)}
                className="mt-2"
              />
            </div>
          </CardContent>
        )}
      </Card>

      {/* Issues */}
      <Card>
        <CardHeader className="pb-3">
          <SectionHeader
            title="⚠️ Issues & Observations"
            section="issues"
            badge={issues.length > 0 ? `${issues.length}` : undefined}
          />
        </CardHeader>
        {expandedSections.issues && (
          <CardContent className="space-y-4">
            {issues.map((issue, idx) => (
              <div
                key={idx}
                className="p-3 border rounded-lg space-y-3 bg-muted/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Issue #{idx + 1}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeIssue(idx)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
                <Textarea
                  placeholder="Describe the issue..."
                  rows={2}
                  value={issue.description}
                  onChange={(e) =>
                    updateIssue(idx, "description", e.target.value)
                  }
                />
                <Select
                  value={issue.severity}
                  onValueChange={(v) => updateIssue(idx, "severity", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">🟢 Low</SelectItem>
                    <SelectItem value="medium">🟡 Medium</SelectItem>
                    <SelectItem value="high">🟠 High</SelectItem>
                    <SelectItem value="critical">🔴 Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={addIssue}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Issue
            </Button>
          </CardContent>
        )}
      </Card>

      {/* Materials */}
      <Card>
        <CardHeader className="pb-3">
          <SectionHeader
            title="📦 Materials Used"
            section="materials"
            badge={materials.length > 0 ? `${materials.length}` : undefined}
          />
        </CardHeader>
        {expandedSections.materials && (
          <CardContent className="space-y-4">
            {materials.map((mat, idx) => (
              <div
                key={idx}
                className="p-3 border rounded-lg space-y-3 bg-muted/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    Material #{idx + 1}
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeMaterial(idx)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
                <Select
                  value={mat.name}
                  onValueChange={(v) => updateMaterial(idx, "name", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select material" />
                  </SelectTrigger>
                  <SelectContent>
                    {COMMON_MATERIALS.map((m) => (
                      <SelectItem key={m} value={m}>
                        {m}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    type="number"
                    min={0}
                    placeholder="Qty"
                    value={mat.quantity || ""}
                    onChange={(e) =>
                      updateMaterial(idx, "quantity", Number(e.target.value))
                    }
                  />
                  <Select
                    value={mat.unit}
                    onValueChange={(v) => updateMaterial(idx, "unit", v)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {MATERIAL_UNITS.map((u) => (
                        <SelectItem key={u} value={u}>
                          {u}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={addMaterial}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Material
            </Button>
          </CardContent>
        )}
      </Card>

      {/* Safety Checklist */}
      <Card>
        <CardHeader className="pb-3">
          <SectionHeader
            title="🦺 Safety Checklist"
            section="safety"
            badge={`${
              Object.values(safety).filter(Boolean).length
            }/${Object.keys(safety).length}`}
          />
        </CardHeader>
        {expandedSections.safety && (
          <CardContent className="space-y-3">
            {(Object.keys(safety) as (keyof SafetyChecklist)[]).map((key) => (
              <div key={key} className="flex items-center space-x-3">
                <Checkbox
                  id={key}
                  checked={safety[key]}
                  onCheckedChange={() => toggleSafety(key)}
                />
                <Label htmlFor={key} className="text-sm cursor-pointer">
                  {safetyLabels[key]}
                </Label>
              </div>
            ))}
          </CardContent>
        )}
      </Card>

      {/* Notes */}
      <Card>
        <CardHeader className="pb-3">
          <SectionHeader title="📝 Additional Notes" section="summary" />
        </CardHeader>
        {expandedSections.summary && (
          <CardContent>
            <Textarea
              placeholder="Any additional observations, comments, or notes..."
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </CardContent>
        )}
      </Card>

      {/* Sticky Submit Buttons */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t shadow-lg z-50">
        <div className="max-w-2xl mx-auto flex gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => handleSubmit("draft")}
          >
            <Save className="h-4 w-4 mr-2" />
            Save Draft
          </Button>
          <Button className="flex-1" onClick={() => handleSubmit("submitted")}>
            <Send className="h-4 w-4 mr-2" />
            Submit Report
          </Button>
        </div>
      </div>
    </div>
  );
}
