import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Portal() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });
  }, []);

  const signIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>FineGlaze Client Portal</h1>

      {!session ? (
        <button onClick={signIn}>Continue with Google</button>
      ) : (
        <p>Logged in successfully ✅</p>
      )}
    </div>
  );
}
