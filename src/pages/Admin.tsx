import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2, Upload, FileText, Loader2 } from "lucide-react";

// REPLACE THIS with your actual login email
const ADMIN_EMAIL = "info@fineglaze.com"; 

type Project = {
  id: string;
  created_at: string;
  project_name: string;
  status: string;
  progress: number;
  client_email: string;
  files?: string[]; // Array of file URLs
};

export default function Admin() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Form States
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  // Check Admin Access
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session || session.user.email !== ADMIN_EMAIL) {
        toast.error("Unauthorized Access");
        navigate("/portal"); // Kick them out if not admin
        return;
      }
      fetchProjects();
    };
    checkAuth();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("Clientproject")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) toast.error("Failed to fetch data");
    else setProjects(data || []);
    setLoading(false);
  };

  const handleCreate = async () => {
    if (!newName || !newEmail) {
      toast.error("Name and Email are required");
      return;
    }

    const { error } = await supabase.from("Clientproject").insert({
      project_name: newName,
      client_email: newEmail,
      status: "Initiated",
      progress: 0
    });

    if (error) toast.error("Creation failed: " + error.message);
    else {
      toast.success("Project created!");
      setIsDialogOpen(false);
      setNewName("");
      setNewEmail("");
      fetchProjects();
    }
  };

  const handleUpdate = async (id: string, updates: Partial<Project>) => {
    // Immediate UI update (Optimistic)
    setProjects(projects.map(p => p.id === id ? { ...p, ...updates } : p));
    
    const { error } = await supabase
      .from("Clientproject")
      .update(updates)
      .eq("id", id);
      
    if (error) toast.error("Update failed");
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this project permanently?")) return;
    const { error } = await supabase.from("Clientproject").delete().eq("id", id);
    if (!error) {
      toast.success("Deleted");
      fetchProjects();
    }
  };

  // Simple File Upload Handler
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, projectId: string) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    const fileName = `${projectId}/${Date.now()}-${file.name}`;

    toast.info("Uploading...");
    
    const { error: uploadError } = await supabase.storage
      .from("project-files")
      .upload(fileName, file);

    if (uploadError) {
      toast.error("Upload failed");
      return;
    }

    // Get Public URL
    const { data } = supabase.storage.from("project-files").getPublicUrl(fileName);
    
    // Ideally, you'd store this URL in a "files" column (array) or a separate table
    // For now, let's just log it or alert
    toast.success("File uploaded! (Note: You need to add a 'files' column to DB to save this URL permanently)");
    console.log("File URL:", data.publicUrl);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Logged in as {ADMIN_EMAIL}</p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button><Plus className="mr-2 h-4 w-4"/> New Project</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle>Create New Project</DialogTitle></DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Project Name</Label>
                  <Input placeholder="e.g. Skyline Towers" value={newName} onChange={e => setNewName(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Client Email (Must match their login)</Label>
                  <Input placeholder="client@gmail.com" value={newEmail} onChange={e => setNewEmail(e.target.value)} />
                </div>
                <Button onClick={handleCreate} className="w-full">Create</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="bg-white rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={5} className="text-center h-24"><Loader2 className="animate-spin mx-auto"/></TableCell></TableRow>
              ) : projects.length === 0 ? (
                <TableRow><TableCell colSpan={5} className="text-center h-24 text-muted-foreground">No projects found.</TableCell></TableRow>
              ) : (
                projects.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-medium">{p.project_name}</TableCell>
                    <TableCell>{p.client_email}</TableCell>
                    <TableCell>
                      <Select defaultValue={p.status} onValueChange={(val) => handleUpdate(p.id, { status: val })}>
                        <SelectTrigger className="w-[140px] h-8"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Initiated">Initiated</SelectItem>
                          <SelectItem value="Measurements">Measurements</SelectItem>
                          <SelectItem value="Fabrication">Fabrication</SelectItem>
                          <SelectItem value="Installation">Installation</SelectItem>
                          <SelectItem value="Completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Slider 
                          defaultValue={[p.progress]} 
                          max={100} step={10} 
                          className="w-32" 
                          onValueCommit={(v) => handleUpdate(p.id, { progress: v[0] })} 
                        />
                        <span className="text-xs text-muted-foreground w-8">{p.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right flex justify-end gap-2">
                      <Label htmlFor={`file-${p.id}`} className="cursor-pointer p-2 hover:bg-slate-100 rounded-md">
                        <Upload size={16} className="text-blue-600" />
                        <Input 
                          id={`file-${p.id}`} 
                          type="file" 
                          className="hidden" 
                          onChange={(e) => handleFileUpload(e, p.id)} 
                        />
                      </Label>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(p.id)}>
                        <Trash2 size={16} className="text-red-500" />
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
