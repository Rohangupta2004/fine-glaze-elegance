import React from 'react';
import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './App';
import './index.css';
import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights();

export const createRoot = ViteReactSSG({ routes });
