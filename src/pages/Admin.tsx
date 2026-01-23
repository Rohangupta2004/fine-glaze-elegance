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
import { Textarea } from "@/components/ui/textarea"; // Make sure you have this component or use <textarea className="..." />
import { Plus, Trash2, Upload, History, Loader2, Save } from "lucide-react";

const ADMIN_EMAIL = "info@fineglaze.com"; 

type TimelineEvent = {
  date: string;
  title: string;
  desc: string;
};

type Project = {
  id: string;
  created_at: string;
  project_name: string;
  status: string;
  progress: number;
  client_email: string;
  timeline: TimelineEvent[];
};

export default function Admin() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Create Project State
  const [createOpen, setCreateOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  // Timeline State
  const [timelineOpen, setTimelineOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [newEvent, setNewEvent] = useState({ title: "", desc: "" });

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session || session.user.email !== ADMIN_EMAIL) {
        navigate("/portal");
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
    if (!newName || !newEmail) return toast.error("Required fields missing");
    const { error } = await supabase.from("Clientproject").insert({
      project_name: newName,
      client_email: newEmail,
      status: "Initiated",
      progress: 0,
      timeline: [] // Initialize empty timeline
    });
    if (error) toast.error(error.message);
    else {
      toast.success("Project created");
      setCreateOpen(false);
      fetchProjects();
    }
  };

  const handleUpdate = async (id: string, updates: Partial<Project>) => {
    setProjects(projects.map(p => p.id === id ? { ...p, ...updates } : p));
    await supabase.from("Clientproject").update(updates).eq("id", id);
  };

  const handleAddTimeline = async () => {
    if (!selectedProject || !newEvent.title) return;
    
    const newEntry: TimelineEvent = {
      date: new Date().toISOString(), // Automatically set today's date
      title: newEvent.title,
      desc: newEvent.desc
    };

    const updatedTimeline = [newEntry, ...(selectedProject.timeline || [])];
    
    // Update Local State
    setProjects(projects.map(p => p.id === selectedProject.id ? { ...p, timeline: updatedTimeline } : p));
    setSelectedProject({ ...selectedProject, timeline: updatedTimeline });

    // Update DB
    const { error } = await supabase
      .from("Clientproject")
      .update({ timeline: updatedTimeline })
      .eq("id", selectedProject.id);

    if (error) toast.error("Failed to save event");
    else {
      toast.success("Timeline updated!");
      setNewEvent({ title: "", desc: "" });
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, projectId: string) => {
    if (!e.target.files?.length) return;
    const file = e.target.files[0];
    const fileName = `${projectId}/${Date.now()}-${file.name}`;
    
    toast.info("Uploading...");
    const { error } = await supabase.storage.from("project-files").upload(fileName, file);
    if (error) toast.error("Upload failed");
    else toast.success("File uploaded successfully");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage projects & updates</p>
          </div>
          <Dialog open={createOpen} onOpenChange={setCreateOpen}>
            <DialogTrigger asChild><Button><Plus className="mr-2 h-4 w-4"/> New Project</Button></DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle>Create Project</DialogTitle></DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2"><Label>Name</Label><Input value={newName} onChange={e => setNewName(e.target.value)} /></div>
                <div className="space-y-2"><Label>Client Email</Label><Input value={newEmail} onChange={e => setNewEmail(e.target.value)} /></div>
                <Button onClick={handleCreate} className="w-full">Create</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="bg-white rounded-md border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead className="text-right">Manage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium">
                    {p.project_name}
                    <div className="text-xs text-muted-foreground">{p.client_email}</div>
                  </TableCell>
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
                      <Slider defaultValue={[p.progress]} max={100} step={5} className="w-24" onValueCommit={(v) => handleUpdate(p.id, { progress: v[0] })} />
                      <span className="text-xs w-8">{p.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right flex justify-end gap-2">
                    {/* TIMELINE BUTTON */}
                    <Dialog open={timelineOpen && selectedProject?.id === p.id} onOpenChange={(open) => { setTimelineOpen(open); if(open) setSelectedProject(p); }}>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="icon" title="Update Timeline">
                          <History size={16} className="text-purple-600" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader><DialogTitle>Update Timeline: {p.project_name}</DialogTitle></DialogHeader>
                        <div className="space-y-4">
                          <div className="bg-slate-50 p-4 rounded-md space-y-3 border">
                            <Label>New Update</Label>
                            <Input placeholder="Title (e.g. Glass Arrived)" value={newEvent.title} onChange={e => setNewEvent({...newEvent, title: e.target.value})} />
                            <Textarea placeholder="Description (Optional)" value={newEvent.desc} onChange={e => setNewEvent({...newEvent, desc: e.target.value})} />
                            <Button onClick={handleAddTimeline} size="sm" className="w-full"><Save size={14} className="mr-2"/> Add Entry</Button>
                          </div>
                          <div className="space-y-2 max-h-[200px] overflow-y-auto">
                            <Label>History</Label>
                            {(p.timeline || []).length === 0 && <p className="text-sm text-muted-foreground">No updates yet.</p>}
                            {p.timeline?.map((event, i) => (
                              <div key={i} className="text-sm border-l-2 border-slate-200 pl-3 py-1">
                                <div className="font-medium">{event.title}</div>
                                <div className="text-xs text-muted-foreground">{new Date(event.date).toLocaleDateString()}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* UPLOAD BUTTON */}
                    <Label className="cursor-pointer inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground">
                      <Upload size={16} className="text-blue-600" />
                      <Input type="file" className="hidden" onChange={(e) => handleFileUpload(e, p.id)} />
                    </Label>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
  }
