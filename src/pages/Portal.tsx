export default function Portal(): JSX.Element {
  return (
    <div style={{ padding: 40 }}>
      <h1>ENV TEST</h1>
      <p>URL: {String(import.meta.env.VITE_SUPABASE_URL)}</p>
      <p>
        KEY:{" "}
        {import.meta.env.VITE_SUPABASE_ANON_KEY
          ? "KEY PRESENT"
          : "KEY MISSING"}
      </p>
    </div>
  );
}
