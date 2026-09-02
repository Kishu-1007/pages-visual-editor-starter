import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import {
  themeResolver,
  defaultThemeTailwindExtensions,
  defaultThemeConfig,
  VisualEditorComponentsContentPath,
  VisualEditorThemeClassSafelist,
} from "@yext/visual-editor";
import { ComponentsContentPath as SearchUIComponentsContentPath } from "@yext/search-ui-react";
import themeConfig from "./src/theme.config";
import { projectTailwindExtensions } from "./src/theme/projectTailwindExtensions";



export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    VisualEditorComponentsContentPath,
    SearchUIComponentsContentPath,
  ],
  // safelist: VisualEditorThemeClassSafelist,
  theme: {
    extend: themeResolver(projectTailwindExtensions, themeConfig),
  },
  plugins: [animate],
} satisfies Config;
