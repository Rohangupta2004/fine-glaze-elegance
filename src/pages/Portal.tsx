import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { Mail, LogIn, FileText, Download, Calendar, CheckCircle2, XCircle, MapPin, User, Building } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// ... (Keep existing Type definitions & imports)

export default function Portal() {
  const [session, setSession] = useState<Session | null>(null);
  const [project, setProject] = useState<any>(null);
  const [files, setFiles] = useState<any[]>([]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  // ... (Keep existing Session & Login Logic)

  useEffect(() => {
    if (!session?.user?.email) return;
    fetchData();
  }, [session]);

  const fetchData = async () => {
    setLoading(true);
    const { data: proj } = await supabase.from("Clientproject").select("*").eq("client_email", session?.user.email).maybeSingle();
    if (proj) {
      setProject(proj);
      const { data: fileData } = await supabase.from("ProjectFiles").select("*").eq("project_id", proj.id);
      setFiles(fileData || []);
    }
    setLoading(false);
  };

  const handleApproval = async (fileId: string, status: 'Approved' | 'Rejected') => {
    const { error } = await supabase.from("ProjectFiles").update({ status }).eq("id", fileId);
    if (!error) {
      toast.success(`Document ${status}`);
      fetchData(); // Refresh list
    } else toast.error("Action failed");
  };

  if (!session) return ( /* ... Keep existing Login UI ... */ );

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header ... */}
        
        {loading || !project ? (
            /* ... Keep existing Loading/Empty states ... */
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* 1. PROJECT INFO (Deep Detail) */}
            <div className="space-y-6">
               <Card className="shadow-md border-t-4 border-t-primary">
                <CardHeader><CardTitle>{project.project_name}</CardTitle><Badge className="w-fit">{project.status}</Badge></CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2 text-slate-600"><MapPin size={14}/> {project.site_address || "Address pending"}</div>
                    <div className="flex items-center gap-2 text-slate-600"><Building size={14}/> Arch: {project.architect_name || "N/A"}</div>
                    <div className="flex items-center gap-2 text-slate-600"><User size={14}/> {project.client_phone || "No phone"}</div>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </CardContent>
              </Card>
              {/* Add Finance Card here if you want ... */}
            </div>

            {/* 2. DOCUMENTS & APPROVALS (Unique Interaction) */}
            <Card className="md:col-span-2 shadow-md">
              <CardHeader><CardTitle className="flex items-center gap-2"><FileText className="text-blue-600"/> Documents & Approvals</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {files.length === 0 && <p className="text-muted-foreground text-sm">No documents shared.</p>}
                  {files.map((file) => (
                    <div key={file.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border bg-white hover:shadow-sm transition-all gap-4">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className={`p-2 rounded-full ${file.status === 'Approved' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
                           {file.status === 'Approved' ? <CheckCircle2 size={20}/> : <FileText size={20}/>}
                        </div>
                        <div>
                          <a href={file.url} target="_blank" className="font-medium hover:underline text-blue-700 block truncate max-w-[200px]">{file.name}</a>
                          <div className="text-xs text-muted-foreground">Uploaded {new Date(file.created_at).toLocaleDateString()}</div>
                        </div>
                      </div>

                      {/* Approval Logic */}
                      {file.requires_approval && file.status === 'Pending' ? (
                        <div className="flex gap-2 shrink-0">
                          <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50" onClick={() => handleApproval(file.id, 'Rejected')}>Reject</Button>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white" onClick={() => handleApproval(file.id, 'Approved')}>Approve</Button>
                        </div>
                      ) : file.requires_approval ? (
                        <Badge variant={file.status === 'Approved' ? 'default' : 'destructive'} className={file.status === 'Approved' ? 'bg-green-600' : ''}>
                          {file.status}
                        </Badge>
                      ) : (
                        <Button size="sm" variant="ghost" asChild><a href={file.url} target="_blank"><Download size={16}/></a></Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* 3. TIMELINE (Keep existing logic) */}
            {/* ... Paste your Timeline Card code here ... */}

          </div>
        )}
      </div>
    </div>
  );
                }
