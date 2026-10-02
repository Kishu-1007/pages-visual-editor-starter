// src/ve.config.tsx

import { type Config } from "@puckeditor/core";
import "@yext/visual-editor/style.css";
import "./index.css";

// import {landingPageConfig} from "./config/LandingPage.config";
import {mainConfig, MainConfigProps } from "@yext/visual-editor";
import { HeroConfigProps } from "./components/componentConfig";
import { HeroComponents } from "./components/componentGroups";
import { AboutSection } from "@yext/visual-editor";

/**
 * Visual Editor runtime registry.
 * The key should match the template/page identifier used by the editor.
 */

console.log("VE CONFIG LOADED");

 interface LandingPageConfigProps extends MainConfigProps, HeroConfigProps {
//  HeroConfig: HeroConfigProps
}

export const landingPageConfig: Config<LandingPageConfigProps> = {
  components: {
    ...mainConfig.components,
    // ...AboutSection,
  },

  categories: {
    ...mainConfig.categories,
  },

  root: mainConfig.root,
};

export const componentRegistry: Record<string, Config<any>> = {
  "FitnessLandingPage": landingPageConfig,
};