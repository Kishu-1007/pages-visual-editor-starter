// src/ve.config.tsx

import { type Config } from "@puckeditor/core";
import "@yext/visual-editor/style.css";
import "./index.css";

// import {landingPageConfig} from "./config/LandingPage.config";
import {Directory, DirectoryCategoryProps, mainConfig, MainConfigProps} from "@yext/visual-editor";
// import { HeroConfigProps } from "./components/componentConfig";
// import { AboutSection } from "@yext/visual-editor";
import { HeroSectionEditor, HeroSectionEditorProps } from "./components/componentsEditor/LandingPageSections/HeroSectionEditor";

/**
 * Visual Editor runtime registry.
 * The key should match the template/page identifier used by the editor.
 */

console.log("VE CONFIG LOADED");

 interface ModifiedMainConfigProps extends MainConfigProps, DirectoryCategoryProps {
 HeroSectionEditor: HeroSectionEditorProps;
}

 const components: Config<ModifiedMainConfigProps>["components"] = {
  // components: {
    ...mainConfig.components,
    HeroSectionEditor,
    Directory,
    // ...AboutSection,
    // ...DirectoryCategoryComponents
  };

export const ModifiedMainConfig: Config<ModifiedMainConfigProps> = {
 components,
 categories: {
    ...mainConfig.categories,
    hero: {
      title: "Hero",
      components: ["HeroSectionEditor"],
    },
  },
  root: mainConfig.root,

};

 


export const componentRegistry: Record<string, Config<any>> = {
  "FitnessProgramResultsDetailPage": ModifiedMainConfig,
};