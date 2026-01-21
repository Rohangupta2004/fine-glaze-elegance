import { supabase } from "../lib/supabase";

export default function Portal(): JSX.Element {
  return (
    <div style={{ padding: 40 }}>
      <h1>PORTAL + SUPABASE OK</h1>
      <p>{supabase.supabaseUrl}</p>
    </div>
  );
}
