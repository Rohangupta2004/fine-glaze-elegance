import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Save, Trash2, Loader2 } from "lucide-react";

// Types matching your Database
type Project = {
  id: string; // Ensure your DB has an 'id' column (uuid)
  created_at: string;
  project_name: string;
  status: string;
  progress: number;
};

// Authorized email for simple frontend protection
// (REAL security must be done via Supabase RLS policies)
const ADMIN_EMAIL = "rohan@fineglaze.com"; // Change this to your login email

export default function Admin() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // New Project Form State
  const [newProjectOpen, setNewProjectOpen] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");

  // 1. Check Auth & Fetch Data
  useEffect(() => {
    checkAdminAndFetch();
  }, []);

  const checkAdminAndFetch = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    // Redirect if not logged in
    if (!session) {
      navigate("/portal"); 
      return;
    }

    // Optional: Strict Email Check
    // if (session.user.email !== ADMIN_EMAIL) {
    //   toast.error("Unauthorized access");
    //   navigate("/");
    //   return;
    // }

    setIsAdmin(true);
    fetchProjects();
  };

  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("Clientproject")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to load projects");
      console.error(error);
    } else {
      setProjects(data || []);
    }
    setLoading(false);
  };

  // 2. Actions
  const handleCreateProject = async () => {
    if (!newProjectName) return;

    const { error } = await supabase.from("Clientproject").insert({
      project_name: newProjectName,
      status: "Initiated",
      progress: 0,
      // user_id: session.user.id  <-- You will add this later to link to specific clients
    });

    if (error) {
      toast.error("Error creating project");
    } else {
      toast.success("Project created!");
      setNewProjectName("");
      setNewProjectOpen(false);
      fetchProjects();
    }
  };

  const handleUpdate = async (id: string, updates: Partial<Project>) => {
    // Optimistic UI Update (makes it feel instant)
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));

    const { error } = await supabase
      .from("Clientproject")
      .update(updates)
      .eq("id", id);

    if (error) {
      toast.error("Failed to update");
      fetchProjects(); // Revert on error
    } else {
      toast.success("Project updated");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    const { error } = await supabase.from("Clientproject").delete().eq("id", id);

    if (error) {
      toast.error("Failed to delete");
    } else {
      toast.success("Project deleted");
      fetchProjects();
    }
  };

  if (!isAdmin) return null; // Or a loading spinner while redirecting

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage client projects and updates.</p>
          </div>
          
          <Dialog open={newProjectOpen} onOpenChange={setNewProjectOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus size={16} /> New Project
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Project</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Project Name</Label>
                  <Input 
                    placeholder="e.g. Villa Facade Renovation" 
                    value={newProjectName}
                    onChange={(e) => setNewProjectName(e.target.value)}
                  />
                </div>
                <Button onClick={handleCreateProject} className="w-full">
                  Create Project
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Projects Table */}
        <div className="bg-white rounded-lg border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Project Name</TableHead>
                <TableHead className="w-[200px]">Status</TableHead>
                <TableHead className="w-[300px]">Progress</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={4} className="h-24 text-center">
                    <Loader2 className="w-6 h-6 animate-spin mx-auto text-muted-foreground" />
                  </TableCell>
                </TableRow>
              ) : projects.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                    No projects found. Create one to get started.
                  </TableCell>
                </TableRow>
              ) : (
                projects.map((project) => (
                  <TableRow key={project.id}>
                    {/* Name */}
                    <TableCell className="font-medium">
                      {project.project_name}
                      <div className="text-xs text-muted-foreground hidden lg:block">
                        ID: {project.id.slice(0, 8)}...
                      </div>
                    </TableCell>

                    {/* Status Dropdown */}
                    <TableCell>
                      <Select 
                        defaultValue={project.status} 
                        onValueChange={(val) => handleUpdate(project.id, { status: val })}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Initiated">Initiated</SelectItem>
                          <SelectItem value="Measurements">Measurements</SelectItem>
                          <SelectItem value="Fabrication">Fabrication</SelectItem>
                          <SelectItem value="Installation">Installation</SelectItem>
                          <SelectItem value="Completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>

                    {/* Progress Slider */}
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <Slider
                          defaultValue={[project.progress]}
                          max={100}
                          step={5}
                          className="w-[60%]"
                          onValueCommit={(vals) => handleUpdate(project.id, { progress: vals[0] })}
                        />
                        <span className="text-sm font-medium w-12">{project.progress}%</span>
                      </div>
                    </TableCell>

                    {/* Actions */}
                    <TableCell className="text-right">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => handleDelete(project.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

      </div>
    </div>
  );
  }
