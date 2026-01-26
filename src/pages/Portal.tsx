import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { Mail, LogIn, FileText, Download, Calendar, CheckCircle2, XCircle, MapPin, User, Building, IndianRupee, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

type ProjectFile = {
  id: string;
  name: string;
  url: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  requires_approval: boolean;
  created_at: string;
};

type Project = {
  id: string;
  project_name: string;
  status: string;
  progress: number;
  client_email: string;
  client_phone: string;
  site_address: string;
  architect_name: string;
  total_amount: number;
  paid_amount: number;
  timeline: { date: string; title: string; desc: string }[];
};

export default function Portal() {
  const [session, setSession] = useState<Session | null>(null);
  const [project, setProject] = useState<Project | null>(null);
  const [files, setFiles] = useState<ProjectFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => setSession(session));
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session?.user?.email) fetchData();
  }, [session]);

  const fetchData = async () => {
    setLoading(true);
    const { data: proj } = await supabase.from("Clientproject").select("*").eq("client_email", session?.user.email).maybeSingle();
    if (proj) {
      setProject(proj);
      const { data: fileData } = await supabase.from("ProjectFiles").select("*").eq("project_id", proj.id).order('created_at', { ascending: false });
      setFiles(fileData || []);
    }
    setLoading(false);
  };

  const handleApproval = async (fileId: string, status: 'Approved' | 'Rejected') => {
    const { error } = await supabase.from("ProjectFiles").update({ status }).eq("id", fileId);
    if (!error) {
      toast.success(`Document ${status}`);
      fetchData(); 
    } else toast.error("Action failed");
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo: `${window.location.origin}/portal` } });
  };

  const signInWithEmail = async () => {
    if (!email) return toast.error("Enter email");
    setIsAuthLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });
    setIsAuthLoading(false);
    if (error) toast.error(error.message);
    else toast.success("Login link sent to your email!");
  };

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <Card className="w-full max-w-md shadow-xl border-t-4 border-t-primary">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Client Portal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Button variant="outline" className="w-full h-12 gap-2" onClick={signInWithGoogle}>Continue with Google</Button>
            <div className="relative text-center text-xs uppercase text-muted-foreground"><span className="bg-white px-2 relative z-10">Or use email</span><div className="absolute inset-0 top-1/2 border-t -z-0" /></div>
            <div className="flex gap-2">
              <Input type="email" placeholder="client@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Button onClick={signInWithEmail} disabled={isAuthLoading}><Mail size={18} /></Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div><h1 className="text-3xl font-bold text-slate-900">Project Dashboard</h1><p className="text-slate-500">Welcome, {session.user.email}</p></div>
          <Button variant="outline" onClick={() => supabase.auth.signOut()}>Sign Out</Button>
        </div>

        {loading ? (
          <div className="space-y-4"><Skeleton className="h-48 w-full rounded-xl" /><Skeleton className="h-32 w-full rounded-xl" /></div>
        ) : !project ? (
          <Card className="border-dashed border-2 p-10 text-center"><h3 className="text-xl">No Active Project</h3><p>Contact support if this is an error.</p></Card>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* LEFT: INFO & FINANCE */}
            <div className="space-y-6">
              <Card className="shadow-md border-t-4 border-t-primary">
                <CardHeader className="pb-2"><CardTitle>{project.project_name}</CardTitle><Badge className="w-fit">{project.status}</Badge></CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-slate-600"><MapPin size={14} className="text-primary"/> {project.site_address || "Address pending"}</div>
                    <div className="flex items-center gap-2 text-slate-600"><Building size={14} className="text-primary"/> Arch: {project.architect_name || "N/A"}</div>
                    <div className="flex items-center gap-2 text-slate-600"><User size={14} className="text-primary"/> {project.client_phone || "No phone"}</div>
                  </div>
                  <div className="space-y-1"><div className="flex justify-between text-xs font-medium"><span>Progress</span><span>{project.progress}%</span></div><Progress value={project.progress} className="h-2" /></div>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader className="pb-2"><CardTitle className="flex items-center gap-2 text-base"><IndianRupee size={18}/> Financials</CardTitle></CardHeader>
                <CardContent className="space-y-3 pt-4">
                  <div className="flex justify-between items-center p-3 bg-slate-100 rounded-lg"><span className="text-sm text-slate-600">Total</span><span className="font-bold">₹{project.total_amount?.toLocaleString()}</span></div>
                  <div className="flex justify-between items-center p-3 bg-green-50 text-green-700 rounded-lg border border-green-100"><span className="text-sm">Paid</span><span className="font-bold">₹{project.paid_amount?.toLocaleString()}</span></div>
                  <div className="text-xs text-center text-slate-400">Pending: ₹{((project.total_amount || 0) - (project.paid_amount || 0)).toLocaleString()}</div>
                </CardContent>
              </Card>
            </div>

            {/* MIDDLE: DOCUMENTS */}
            <Card className="md:col-span-2 shadow-md h-fit">
              <CardHeader><CardTitle className="flex items-center gap-2"><FileText className="text-blue-600"/> Documents & Approvals</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {files.length === 0 && <p className="text-muted-foreground text-sm text-center py-4">No documents shared yet.</p>}
                  {files.map((file) => (
                    <div key={file.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border bg-white hover:shadow-sm transition-all gap-4">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className={`p-2 rounded-full ${file.status === 'Approved' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
                           {file.status === 'Approved' ? <CheckCircle2 size={20}/> : file.status === 'Rejected' ? <XCircle size={20}/> : <FileText size={20}/>}
                        </div>
                        <div>
                          <a href={file.url} target="_blank" className="font-medium hover:underline text-blue-700 block truncate max-w-[180px]">{file.name}</a>
                          <div className="text-xs text-muted-foreground">{new Date(file.created_at).toLocaleDateString()}</div>
                        </div>
                      </div>

                      {file.requires_approval && file.status === 'Pending' ? (
                        <div className="flex gap-2 shrink-0">
                          <Button size="sm" variant="outline" className="text-red-600 hover:bg-red-50" onClick={() => handleApproval(file.id, 'Rejected')}>Reject</Button>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => handleApproval(file.id, 'Approved')}>Approve</Button>
                        </div>
                      ) : file.requires_approval ? (
                        <Badge variant={file.status === 'Approved' ? 'default' : 'destructive'} className={file.status === 'Approved' ? 'bg-green-600' : ''}>{file.status}</Badge>
                      ) : (
                        <Button size="sm" variant="ghost" asChild><a href={file.url} target="_blank"><Download size={16}/></a></Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* RIGHT: TIMELINE (Full Width on Mobile, Col-span-3) */}
            <Card className="md:col-span-3 shadow-md flex flex-col max-h-[500px]">
              <CardHeader><CardTitle className="flex items-center gap-2"><Calendar className="text-purple-600" size={20}/> Project Timeline</CardTitle></CardHeader>
              <CardContent className="overflow-y-auto">
                {(!project.timeline || project.timeline.length === 0) ? (
                  <div className="text-center py-6 text-sm text-muted-foreground">No updates yet.</div>
                ) : (
                  <div className="space-y-6 relative pl-2 pt-2">
                    <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-slate-100" />
                    {project.timeline.map((event, i) => (
                      <div key={i} className="relative flex gap-4">
                        <div className={`w-4 h-4 rounded-full border-2 border-white shadow-sm z-10 mt-1 shrink-0 ${i === 0 ? 'bg-purple-600 ring-2 ring-purple-100' : 'bg-slate-300'}`} />
                        <div className="space-y-1 pb-2">
                          <p className="text-xs font-medium text-slate-500 uppercase">{new Date(event.date).toLocaleDateString()}</p>
                          <h4 className={`font-semibold ${i === 0 ? 'text-slate-900' : 'text-slate-600'}`}>{event.title}</h4>
                          {event.desc && <p className="text-sm text-muted-foreground">{event.desc}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

          </div>
        )}
      </div>
    </div>
  );
    }
