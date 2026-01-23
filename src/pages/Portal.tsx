import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { Mail, LogIn, FileText, Download, Calendar, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

type Project = {
  id: string;
  project_name: string;
  status: string;
  progress: number;
  client_email: string;
  created_at: string;
};

type FileItem = {
  name: string;
  url: string;
};

export default function Portal() {
  const [session, setSession] = useState<Session | null>(null);
  const [project, setProject] = useState<Project | null>(null);
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  // 1. Session Handling
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => setSession(session));
    return () => subscription.unsubscribe();
  }, []);

  // 2. Fetch Project & Files
  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        // A. Find project assigned to this user's email
        const { data: projectData, error: projectError } = await supabase
          .from("Clientproject")
          .select("*")
          .eq("client_email", session.user.email)
          .maybeSingle(); // Gets the first match (assuming 1 active project per client)

        if (projectError) throw projectError;
        setProject(projectData);

        // B. If project exists, fetch its files from Storage
        if (projectData) {
          const { data: fileList, error: fileError } = await supabase.storage
            .from("project-files")
            .list(projectData.id); // Looks inside folder named after Project ID

          if (fileList) {
            const filesWithUrls = fileList.map((f) => {
              const { data } = supabase.storage
                .from("project-files")
                .getPublicUrl(`${projectData.id}/${f.name}`);
              return { name: f.name, url: data.publicUrl };
            });
            setFiles(filesWithUrls);
          }
        }
      } catch (error) {
        console.error("Error loading portal:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [session]);

  // 3. Login Handlers
  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/portal` },
    });
  };

  const signInWithEmail = async () => {
    if (!email) return toast.error("Please enter your email");
    setIsAuthLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });
    setIsAuthLoading(false);
    if (error) toast.error(error.message);
    else toast.success("Check your email for the login link!");
  };

  /* ------------------- LOGIN VIEW ------------------- */
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <Card className="w-full max-w-md shadow-xl border-t-4 border-t-primary">
          <CardHeader className="text-center space-y-2">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
              <LogIn className="text-primary" size={24} />
            </div>
            <CardTitle className="text-2xl font-bold">Client Portal</CardTitle>
            <CardDescription>Enter your email to view your project status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Button variant="outline" className="w-full h-12 gap-2" onClick={signInWithGoogle}>
              <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
              Continue with Google
            </Button>
            <div className="relative text-center text-xs uppercase text-muted-foreground">
              <span className="bg-white px-2 relative z-10">Or use email</span>
              <div className="absolute inset-0 top-1/2 border-t -z-0" />
            </div>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="client@gmail.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="h-11"
              />
              <Button onClick={signInWithEmail} disabled={isAuthLoading} className="h-11 px-6">
                <Mail size={18} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  /* ------------------- DASHBOARD VIEW ------------------- */
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-10">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Project Dashboard</h1>
            <p className="text-slate-500">Welcome, {session.user.email}</p>
          </div>
          <Button variant="outline" onClick={() => supabase.auth.signOut()}>Sign Out</Button>
        </div>

        {loading ? (
          <div className="space-y-4">
            <Skeleton className="h-48 w-full rounded-xl" />
            <Skeleton className="h-32 w-full rounded-xl" />
          </div>
        ) : !project ? (
          <Card className="border-dashed border-2">
            <CardContent className="flex flex-col items-center justify-center py-20 text-center space-y-4">
              <div className="bg-orange-100 p-4 rounded-full text-orange-600">
                <AlertCircle size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">No Active Project Found</h3>
                <p className="text-muted-foreground max-w-sm mx-auto mt-2">
                  We couldn't find a project linked to <b>{session.user.email}</b>. 
                  Please ensure you are logged in with the email address provided to our team.
                </p>
              </div>
              <Button variant="secondary">Contact Support</Button>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Status Card */}
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="h-2 bg-primary w-full" />
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-1">{project.project_name}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      Started {new Date(project.created_at).toLocaleDateString()}
                    </div>
                  </div>
                  <Badge className="text-sm py-1 px-3" variant={project.progress === 100 ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Completion Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-3 w-full bg-slate-100" />
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Documents Section */}
              <Card className="md:col-span-2 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="text-primary" size={20} />
                    Project Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {files.length === 0 ? (
                    <div className="text-center py-10 border border-dashed rounded-lg bg-slate-50/50">
                      <p className="text-sm text-muted-foreground">No documents uploaded yet.</p>
                    </div>
                  ) : (
                    <div className="grid gap-3">
                      {files.map((file) => (
                        <a 
                          key={file.name} 
                          href={file.url} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center justify-between p-4 rounded-lg border hover:border-primary hover:bg-primary/5 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="bg-white p-2 rounded shadow-sm">
                              <FileText size={20} className="text-slate-400 group-hover:text-primary" />
                            </div>
                            <span className="font-medium text-sm truncate max-w-[200px] md:max-w-xs">
                              {file.name}
                            </span>
                          </div>
                          <Download size={16} className="text-slate-400 group-hover:text-primary" />
                        </a>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Contact/Updates Section */}
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-600" size={20} />
                    Latest Update
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg text-sm text-slate-600 leading-relaxed">
                    Current Status: <span className="font-semibold text-slate-900">{project.status}</span>.
                    <br/><br/>
                    Our team is currently working on this phase. You will receive an email notification when the next milestone is reached.
                  </div>
                  <Button variant="outline" className="w-full">Contact Manager</Button>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
    }
