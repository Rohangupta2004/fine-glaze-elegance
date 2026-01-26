import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import {
  Mail,
  LogIn,
  FileText,
  Download,
  Calendar,
  CheckCircle2,
  XCircle,
  MapPin,
  User,
  Building,
  IndianRupee,
} from "lucide-react";
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
  status: "Pending" | "Approved" | "Rejected";
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
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "activate">("login");
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((_, s) =>
      setSession(s)
    );
    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session?.user?.email) fetchData();
  }, [session]);

  const fetchData = async () => {
    setLoading(true);
    const { data: proj } = await supabase
      .from("Clientproject")
      .select("*")
      .eq("client_email", session?.user.email)
      .maybeSingle();

    if (proj) {
      setProject(proj);
      const { data: fileData } = await supabase
        .from("ProjectFiles")
        .select("*")
        .eq("project_id", proj.id)
        .order("created_at", { ascending: false });
      setFiles(fileData || []);
    }
    setLoading(false);
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/portal` },
    });
  };

  const signInWithPassword = async () => {
    if (!email || !password) return toast.error("Missing credentials");
    setIsAuthLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setIsAuthLoading(false);
    if (error) toast.error(error.message);
  };

  const activateAccount = async () => {
    if (!email || !password) return toast.error("Missing credentials");

    const { data } = await supabase
      .from("Clientproject")
      .select("id")
      .eq("client_email", email)
      .single();

    if (!data) return toast.error("No project linked");

    setIsAuthLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/portal`,
      },
    });
    setIsAuthLoading(false);
    if (error) toast.error(error.message);
    else toast.success("Confirm email to activate");
  };

  const resetPassword = async () => {
    if (!email) return toast.error("Enter email");
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/portal`,
    });
    toast.success("Password reset email sent");
  };

  const handleApproval = async (
    fileId: string,
    status: "Approved" | "Rejected"
  ) => {
    const { error } = await supabase
      .from("ProjectFiles")
      .update({ status })
      .eq("id", fileId);
    if (!error) fetchData();
  };

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Client Portal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={signInWithGoogle}
            >
              Continue with Google
            </Button>

            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {mode === "login" ? (
              <Button
                className="w-full"
                onClick={signInWithPassword}
                disabled={isAuthLoading}
              >
                Sign In
              </Button>
            ) : (
              <Button
                className="w-full"
                onClick={activateAccount}
                disabled={isAuthLoading}
              >
                Activate Account
              </Button>
            )}

            {mode === "login" && (
              <button
                onClick={resetPassword}
                className="text-xs underline w-full"
              >
                Forgot password?
              </button>
            )}

            <button
              onClick={() =>
                setMode(mode === "login" ? "activate" : "login")
              }
              className="text-xs underline w-full"
            >
              {mode === "login" ? "Activate access" : "Back to login"}
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Project Dashboard</h1>
          <Button variant="outline" onClick={() => supabase.auth.signOut()}>
            Sign Out
          </Button>
        </div>

        {loading ? (
          <Skeleton className="h-48 w-full" />
        ) : (
          project && (
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{project.project_name}</CardTitle>
                  <Badge>{project.status}</Badge>
                </CardHeader>
                <CardContent>
                  <Progress value={project.progress} />
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Documents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {files.map((f) => (
                    <div key={f.id} className="flex justify-between">
                      <a href={f.url} target="_blank">
                        {f.name}
                      </a>
                      {f.requires_approval && f.status === "Pending" && (
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() =>
                              handleApproval(f.id, "Approved")
                            }
                          >
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              handleApproval(f.id, "Rejected")
                            }
                          >
                            Reject
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          )
        )}
      </div>
    </div>
  );
}
