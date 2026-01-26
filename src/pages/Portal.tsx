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
  AlertCircle,
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
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) =>
      setSession(session)
    );
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) =>
      setSession(session)
    );
    return () => subscription.unsubscribe();
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

  const handleApproval = async (
    fileId: string,
    status: "Approved" | "Rejected"
  ) => {
    const { error } = await supabase
      .from("ProjectFiles")
      .update({ status })
      .eq("id", fileId);

    if (!error) {
      toast.success(`Document ${status}`);
      fetchData();
    } else {
      toast.error("Action failed");
    }
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/portal`,
      },
    });
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
            <CardTitle className="text-2xl font-bold">
              Client Portal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Button
              variant="outline"
              className="w-full h-12 gap-2"
              onClick={signInWithGoogle}
            >
              Continue with Google
            </Button>

            <div className="relative text-center text-xs uppercase text-muted-foreground">
              <span className="bg-white px-2 relative z-10">
                Or use email
              </span>
              <div className="absolute inset-0 top-1/2 border-t -z-0" />
            </div>

            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="client@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                onClick={signInWithEmail}
                disabled={isAuthLoading}
              >
                <Mail size={18} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* REST OF YOUR JSX — UNCHANGED */}
      </div>
    </div>
  );
  }
