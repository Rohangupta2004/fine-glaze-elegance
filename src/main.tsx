import React from 'react';
import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './App';
import './index.css';
import { injectSpeedInsights } from "@vercel/speed-insights";
import { installContactClickTracking } from "./lib/analytics";

if (typeof window !== "undefined") {
  // The Speed Insights script only exists on Vercel; elsewhere (localhost, previews)
  // its URL is a 404, so inject it on the production hostnames only.
  if (/(^|\.)fineglaze\.com$|\.vercel\.app$/.test(window.location.hostname)) injectSpeedInsights();
  installContactClickTracking();
}

export const createRoot = ViteReactSSG({ routes });
