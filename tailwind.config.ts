import type { Config } from "tailwindcss";
import {
  themeResolver,
  defaultThemeTailwindExtensions,
  defaultThemeConfig,
  VisualEditorComponentsContentPath,
  VisualEditorThemeClassSafelist
} from "@yext/visual-editor";
import {projectTailwindExtensions} from "./src/theme/projectTailwindExtensions";
import { ComponentsContentPath as SearchUIComponentsContentPath } from "@yext/search-ui-react";
import themeConfig from "./src/theme/theme.config";

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    VisualEditorComponentsContentPath,
    SearchUIComponentsContentPath,
  ],
  safelist: VisualEditorThemeClassSafelist,
  theme: {
    extend: themeResolver(projectTailwindExtensions, themeConfig,
      
    ),
  },
  plugins: [],
} satisfies Config;
