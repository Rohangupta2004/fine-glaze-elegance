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
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2, Upload, History, IndianRupee, Save, FileCheck, User, CheckCircle2, XCircle, MapPin, Building, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

// ⚠️ CHANGE THIS TO YOUR EMAIL
const ADMIN_EMAIL = "info@fineglaze.com"; 

type ProjectFile = {
  id: string;
  name: string;
  url: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  requires_approval: boolean;
};

type Project = {
  id: string;
  created_at: string;
  project_name: string;
  client_email: string;
  client_phone?: string;
  site_address?: string;
  architect_name?: string;
  status: string;
  progress: number;
  total_amount: number;
  paid_amount: number;
  timeline: { date: string; title: string; desc: string }[];
};

export default function Admin() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [files, setFiles] = useState<Record<string, ProjectFile[]>>({});
  const [loading, setLoading] = useState(true);
  
  // Modals
  const [createOpen, setCreateOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [filesOpen, setFilesOpen] = useState(false);
  const [timelineOpen, setTimelineOpen] = useState(false);
  const [financeOpen, setFinanceOpen] = useState(false);

  // Forms
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "", architect: "" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [newEvent, setNewEvent] = useState({ title: "", desc: "" });
  const [financeData, setFinanceData] = useState({ total: 0, paid: 0 });
  const [uploadReqApproval, setUploadReqApproval] = useState(false);

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
    const { data } = await supabase.from("Clientproject").select("*").order("created_at", { ascending: false });
    if (data) {
      setProjects(data);
      data.forEach(p => fetchFiles(p.id));
    }
    setLoading(false);
  };

  const fetchFiles = async (projectId: string) => {
    const { data } = await supabase.from("ProjectFiles").select("*").eq("project_id", projectId);
    if (data) setFiles(prev => ({ ...prev, [projectId]: data }));
  };

  const handleCreate = async () => {
    const { error } = await supabase.from("Clientproject").insert({
      project_name: formData.name,
      client_email: formData.email,
      client_phone: formData.phone,
      site_address: formData.address,
      architect_name: formData.architect,
      status: "Initiated",
      progress: 0,
      total_amount: 0,
      paid_amount: 0,
      timeline: []
    });

    if (!error) {
      toast.success("Project created");
      setCreateOpen(false);
      setFormData({ name: "", email: "", phone: "", address: "", architect: "" });
      fetchProjects();
    } else toast.error(error.message);
  };

  const handleUpdate = async (id: string, updates: Partial<Project>) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
    await supabase.from("Clientproject").update(updates).eq("id", id);
    toast.success("Updated");
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, projectId: string) => {
    if (!e.target.files?.length) return;
    const file = e.target.files[0];
    const fileName = `${projectId}/${Date.now()}-${file.name}`;
    
    toast.info("Uploading...");
    const { error: uploadError } = await supabase.storage.from("project-files").upload(fileName, file);
    if (uploadError) return toast.error("Upload failed");

    const { data: urlData } = supabase.storage.from("project-files").getPublicUrl(fileName);
    
    const { error: dbError } = await supabase.from("ProjectFiles").insert({
      project_id: projectId,
      name: file.name,
      url: urlData.publicUrl,
      requires_approval: uploadReqApproval
    });

    if (!dbError) {
      toast.success("File uploaded");
      fetchFiles(projectId);
      setUploadReqApproval(false);
    }
  };

  const handleAddTimeline = async () => {
    if (!selectedProject || !newEvent.title) return;
    const newEntry = { date: new Date().toISOString(), title: newEvent.title, desc: newEvent.desc };
    const updatedTimeline = [newEntry, ...(selectedProject.timeline || [])];
    
    setProjects(prev => prev.map(p => p.id === selectedProject.id ? { ...p, timeline: updatedTimeline } : p));
    await supabase.from("Clientproject").update({ timeline: updatedTimeline }).eq("id", selectedProject.id);
    
    toast.success("Timeline added");
    setNewEvent({ title: "", desc: "" });
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Admin Hub</h1>
            <p className="text-muted-foreground">Manage projects, approvals & financials</p>
          </div>
          <Dialog open={createOpen} onOpenChange={setCreateOpen}>
            <DialogTrigger asChild><Button><Plus className="mr-2 h-4 w-4"/> New Project</Button></DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle>New Project</DialogTitle></DialogHeader>
              <div className="space-y-4 py-4">
                <Input placeholder="Project Name" onChange={e => setFormData({...formData, name: e.target.value})} />
                <Input placeholder="Client Email" onChange={e => setFormData({...formData, email: e.target.value})} />
                <Input placeholder="Phone" onChange={e => setFormData({...formData, phone: e.target.value})} />
                <Input placeholder="Address" onChange={e => setFormData({...formData, address: e.target.value})} />
                <Input placeholder="Architect" onChange={e => setFormData({...formData, architect: e.target.value})} />
                <Button onClick={handleCreate} className="w-full">Create Project</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="bg-white rounded-md border shadow-sm">
          <Table>
            <TableHeader><TableRow><TableHead>Project Details</TableHead><TableHead>Status</TableHead><TableHead>Approvals</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
            <TableBody>
              {projects.map((p) => (
                <TableRow key={p.id}>
                  <TableCell>
                    <div className="font-medium">{p.project_name}</div>
                    <div className="text-xs text-muted-foreground">{p.client_email}</div>
                    <div className="flex gap-2 mt-1">
                        {p.client_phone && <Badge variant="secondary" className="text-[10px]"><Phone size={8} className="mr-1"/>{p.client_phone}</Badge>}
                        {p.architect_name && <Badge variant="secondary" className="text-[10px]"><Building size={8} className="mr-1"/>{p.architect_name}</Badge>}
                    </div>
                  </TableCell>
                  <TableCell>
                     <Select defaultValue={p.status} onValueChange={(val) => handleUpdate(p.id, { status: val })}>
                      <SelectTrigger className="w-[140px] h-8"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {['Initiated','Measurements','Fabrication','Installation','Completed'].map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <div className="flex items-center gap-2 mt-2">
                        <Slider defaultValue={[p.progress]} max={100} step={5} className="w-20" onValueCommit={(v) => handleUpdate(p.id, { progress: v[0] })} />
                        <span className="text-xs">{p.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {(files[p.id] || []).filter(f => f.status === 'Pending' && f.requires_approval).length > 0 ? (
                      <Badge variant="destructive">{(files[p.id] || []).filter(f => f.status === 'Pending' && f.requires_approval).length} Pending</Badge>
                    ) : <Badge variant="secondary" className="bg-green-100 text-green-800">All Clear</Badge>}
                  </TableCell>
                  <TableCell className="text-right flex justify-end gap-2">
                    
                    {/* FILES & APPROVALS */}
                    <Dialog open={filesOpen && selectedProject?.id === p.id} onOpenChange={(o) => {setFilesOpen(o); if(o) setSelectedProject(p); }}>
                      <DialogTrigger asChild><Button variant="outline" size="icon" title="Files"><FileCheck size={16}/></Button></DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader><DialogTitle>Documents</DialogTitle></DialogHeader>
                        <div className="space-y-6">
                          <div className="bg-slate-50 p-4 rounded border space-y-3">
                            <Label>Upload New</Label>
                            <div className="flex items-center gap-4">
                              <Input type="file" onChange={(e) => handleFileUpload(e, p.id)} />
                              <div className="flex items-center space-x-2">
                                <Checkbox id="req" checked={uploadReqApproval} onCheckedChange={(c) => setUploadReqApproval(!!c)} />
                                <Label htmlFor="req">Require Approval?</Label>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {(files[p.id] || []).map(f => (
                              <div key={f.id} className="flex justify-between items-center border p-2 rounded text-sm">
                                <div className="flex items-center gap-2">
                                  <a href={f.url} target="_blank" className="text-blue-600 hover:underline">{f.name}</a>
                                  {f.status === 'Approved' && <CheckCircle2 size={14} className="text-green-500"/>}
                                  {f.status === 'Rejected' && <XCircle size={14} className="text-red-500"/>}
                                  {f.status === 'Pending' && f.requires_approval && <Badge variant="outline">Pending</Badge>}
                                </div>
                                <Button variant="ghost" size="icon" onClick={async () => { await supabase.from("ProjectFiles").delete().eq("id", f.id); fetchFiles(p.id); }}><Trash2 size={14} className="text-red-500"/></Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* FINANCIALS */}
                    <Dialog open={financeOpen && selectedProject?.id === p.id} onOpenChange={(o) => { setFinanceOpen(o); if(o) { setSelectedProject(p); setFinanceData({ total: p.total_amount, paid: p.paid_amount }); }}}>
                      <DialogTrigger asChild><Button variant="outline" size="icon" title="Finance"><IndianRupee size={16} className="text-green-600"/></Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader><DialogTitle>Financials</DialogTitle></DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2"><Label>Total (₹)</Label><Input type="number" value={financeData.total} onChange={e => setFinanceData({...financeData, total: Number(e.target.value)})} /></div>
                          <div className="space-y-2"><Label>Paid (₹)</Label><Input type="number" value={financeData.paid} onChange={e => setFinanceData({...financeData, paid: Number(e.target.value)})} /></div>
                          <Button onClick={() => { handleUpdate(p.id, { total_amount: financeData.total, paid_amount: financeData.paid }); setFinanceOpen(false); }}>Save</Button>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* TIMELINE */}
                    <Dialog open={timelineOpen && selectedProject?.id === p.id} onOpenChange={(o) => {setTimelineOpen(o); if(o) setSelectedProject(p); }}>
                      <DialogTrigger asChild><Button variant="outline" size="icon" title="Timeline"><History size={16} className="text-purple-600"/></Button></DialogTrigger>
                      <DialogContent>
                        <DialogHeader><DialogTitle>Timeline</DialogTitle></DialogHeader>
                        <div className="space-y-4">
                          <div className="bg-slate-50 p-4 rounded border space-y-3">
                            <Input placeholder="Title" value={newEvent.title} onChange={e => setNewEvent({...newEvent, title: e.target.value})} />
                            <Textarea placeholder="Desc" value={newEvent.desc} onChange={e => setNewEvent({...newEvent, desc: e.target.value})} />
                            <Button onClick={handleAddTimeline} size="sm" className="w-full">Add Entry</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

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
