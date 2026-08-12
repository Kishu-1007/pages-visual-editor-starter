// src/ve.config.tsx

import { type Config } from "@puckeditor/core";
import "@yext/visual-editor/style.css";
import "./index.css";

import {landingPageConfig} from "./config/LandingPage.config";

/**
 * Visual Editor runtime registry.
 * The key should match the template/page identifier used by the editor.
 */

console.log("VE CONFIG LOADED");

export const componentRegistry: Record<string, Config<any>> = {
  "FitnessProgramResultsDetailPage": landingPageConfig,
};