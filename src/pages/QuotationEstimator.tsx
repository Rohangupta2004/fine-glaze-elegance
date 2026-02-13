import { useEffect, useMemo, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";
import { Loader2 } from "lucide-react";

type MaterialRate = {
  material: string;
  unit: string;
  rate: number;
  updated_at: string;
};

type ProjectHistory = {
  project_type: string;
  area: number;
  material_cost: number;
  final_price: number;
};

const projectTypes = [
  "aluminium-facade",
  "structural-glazing",
  "curtain-wall",
  "acp-cladding",
  "glass-railings",
];

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export default function QuotationEstimator() {
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [area, setArea] = useState<number>(1000);
  const [material, setMaterial] = useState<string>("");
  const [materialQty, setMaterialQty] = useState<number>(1);

  const [rates, setRates] = useState<MaterialRate[]>([]);
  const [history, setHistory] = useState<ProjectHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError("");

      const [{ data: ratesData, error: ratesError }, { data: historyData, error: historyError }] = await Promise.all([
        supabase.from("material_rates").select("material, unit, rate, updated_at").order("material"),
        supabase
          .from("project_history")
          .select("project_type, area, material_cost, final_price"),
      ]);

      if (ratesError || historyError) {
        setError(ratesError?.message || historyError?.message || "Unable to fetch estimation inputs.");
      }

      const mappedRates = (ratesData || []).map((row) => ({
        material: row.material,
        unit: row.unit,
        rate: Number(row.rate) || 0,
        updated_at: row.updated_at,
      }));

      const mappedHistory = (historyData || []).map((row) => ({
        project_type: row.project_type,
        area: Number(row.area) || 0,
        material_cost: Number(row.material_cost) || 0,
        final_price: Number(row.final_price) || 0,
      }));

      setRates(mappedRates);
      setHistory(mappedHistory);
      setMaterial((prev) => prev || mappedRates[0]?.material || "");
      setLoading(false);
    };

    load();
  }, []);

  const selectedRate = useMemo(
    () => rates.find((entry) => entry.material === material),
    [rates, material]
  );

  const materialCost = useMemo(() => {
    if (!selectedRate) return 0;
    return materialQty * selectedRate.rate;
  }, [materialQty, selectedRate]);

  const workRate = useMemo(() => {
    const relevant = history.filter((item) => item.area > 0 && item.final_price >= item.material_cost);
    const similar = relevant.filter((item) => item.project_type === projectType);
    const source = similar.length > 0 ? similar : relevant;

    if (source.length === 0) return 0;

    const avg =
      source.reduce((sum, item) => sum + (item.final_price - item.material_cost) / item.area, 0) /
      source.length;

    return Math.max(0, avg);
  }, [history, projectType]);

  const learnedWorkCost = area * workRate;
  const finalEstimate = materialCost + learnedWorkCost;

  const datasetSize = history.filter((item) => item.project_type === projectType).length;

  return (
    <Layout>
      <section className="container py-12 space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Quotation Value Estimation Engine</h1>
          <p className="text-muted-foreground">
            Hybrid Model: Final Price = Material Cost (live rates) + Learned Work Cost (historical data).
          </p>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertTitle>Data source error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Project Inputs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="project-type">Project Type</Label>
                <Select value={projectType} onValueChange={setProjectType}>
                  <SelectTrigger id="project-type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="area">Area (sqft)</Label>
                <Input
                  id="area"
                  type="number"
                  min={1}
                  value={area}
                  onChange={(e) => setArea(Math.max(1, Number(e.target.value) || 0))}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Material</Label>
                  <Select value={material} onValueChange={setMaterial}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select material" />
                    </SelectTrigger>
                    <SelectContent>
                      {rates.map((entry) => (
                        <SelectItem key={entry.material} value={entry.material}>
                          {entry.material}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="qty">Quantity ({selectedRate?.unit || "unit"})</Label>
                  <Input
                    id="qty"
                    type="number"
                    min={0}
                    value={materialQty}
                    onChange={(e) => setMaterialQty(Math.max(0, Number(e.target.value) || 0))}
                  />
                </div>
              </div>

              <div className="text-sm text-muted-foreground">
                Live rate: {selectedRate ? `${currency.format(selectedRate.rate)} / ${selectedRate.unit}` : "No rate selected"}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Predicted Quote</CardTitle>
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span>Material Cost</span>
                <span className="font-medium">{currency.format(materialCost)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Learned Work Rate</span>
                <span className="font-medium">{currency.format(workRate)} / sqft</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Learned Work Cost</span>
                <span className="font-medium">{currency.format(learnedWorkCost)}</span>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">Final Price</span>
                <span className="text-2xl font-bold">{currency.format(finalEstimate)}</span>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-muted-foreground">
                <Badge variant="secondary">History records: {datasetSize}</Badge>
                <span>
                  {datasetSize === 0
                    ? "Using fallback work-rate from all projects"
                    : "Using project-type specific history"}
                </span>
              </div>

              <Button variant="outline" className="w-full" disabled>
                Save Quote (next step)
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
