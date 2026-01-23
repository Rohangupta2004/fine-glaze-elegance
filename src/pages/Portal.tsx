import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { Mail, LogIn, FileText, AlertCircle } from "lucide-react";
import { toast } from "sonner";

// UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

type Project = {
  project_name: string;
  status: string;
  progress: number;
};

export default function Portal() {
  const [session, setSession] = useState<Session | null>(null);
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  // 1. Get initial session
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth changes (e.g. sign out)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // 2. Fetch project data when session exists
  useEffect(() => {
    if (!session) return;

    const fetchProject = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("Clientproject")
          .select("project_name, status, progress")
          .maybeSingle();

        if (error) throw error;
        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
        toast.error("Could not load project data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [session]);

  // 3. Auth Handlers
  const signInWithGoogle = async () => {
    try {
      setIsAuthLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/portal`,
        },
      });
      if (error) throw error;
    } catch (error: any) {
      toast.error(error.message || "Failed to sign in with Google");
    } finally {
      setIsAuthLoading(false);
    }
  };

  const signInWithEmail = async () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    try {
      setIsAuthLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      toast.success("Magic link sent! Check your email.");
    } catch (error: any) {
      toast.error(error.message || "Failed to send magic link");
    } finally {
      setIsAuthLoading(false);
    }
  };

  /* ------------------- VIEW: LOGIN ------------------- */
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-bold text-foreground">
              Client Portal
            </CardTitle>
            <CardDescription>
              Sign in to view your project status and documents
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Google Login */}
            <Button
              variant="outline"
              className="w-full flex gap-2 h-12 text-base"
              onClick={signInWithGoogle}
              disabled={isAuthLoading}
            >
              <LogIn size={18} />
              Continue with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Email Login */}
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10"
              />
              <Button 
                onClick={signInWithEmail} 
                disabled={isAuthLoading}
                className="shrink-0"
              >
                <Mail size={16} className="mr-2" />
                Send Link
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  /* ------------------- VIEW: DASHBOARD ------------------- */
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header with Sign Out */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              My Project
            </h1>
            <p className="text-muted-foreground mt-1">
              Welcome back, {session.user.email}
            </p>
          </div>
          <Button 
            variant="ghost" 
            onClick={() => supabase.auth.signOut()}
          >
            Sign Out
          </Button>
        </div>

        {/* Loading State Skeleton */}
        {loading ? (
          <div className="space-y-6">
            <Skeleton className="h-[200px] w-full rounded-xl" />
            <Skeleton className="h-[150px] w-full rounded-xl" />
          </div>
        ) : !project ? (
          /* Empty State */
          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-16 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <AlertCircle size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">No Active Projects</h3>
                <p className="text-muted-foreground max-w-sm mt-2">
                  There are no projects currently linked to your account. Please contact Fine Glaze support if you believe this is an error.
                </p>
              </div>
              <Button variant="outline">Contact Support</Button>
            </CardContent>
          </Card>
        ) : (
          /* Main Project View */
          <>
            <Card className="shadow-sm border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-2xl">{project.project_name}</CardTitle>
                <CardDescription>
                  Current Phase: <span className="font-medium text-foreground">{project.status}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Completion</span>
                    <span className="text-muted-foreground">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-3" />
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Files Section Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText size={20} />
                    Project Files
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border border-dashed rounded-lg p-8 text-center text-sm text-muted-foreground">
                    No documents have been uploaded yet.
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions / Timeline Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Site measurements completed. Fabrication in progress.
                  </p>
                  <p className="text-xs text-muted-foreground mt-4 pt-4 border-t">
                    Last updated: Just now
                  </p>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
        }
