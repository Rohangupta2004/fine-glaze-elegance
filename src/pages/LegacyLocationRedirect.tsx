import { Navigate, useParams } from "react-router-dom";
import { legacyLocationDestination } from "@/lib/legacyLocationRedirects";

/**
 * Client-side fallback for retired /facade-contractor/:slug pages.
 * In production Vercel answers these with a 301 before the app loads;
 * this only runs for in-app navigation or local dev.
 */
export default function LegacyLocationRedirect() {
  const { city = "" } = useParams();
  return <Navigate to={legacyLocationDestination(city)} replace />;
}
