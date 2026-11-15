import React from 'react';
import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './App';
import './index.css';
import { injectSpeedInsights } from "@vercel/speed-insights";
import { installContactClickTracking } from "./lib/analytics";

injectSpeedInsights();
if (typeof window !== "undefined") installContactClickTracking();

export const createRoot = ViteReactSSG({ routes });
