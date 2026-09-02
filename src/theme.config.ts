import type { ThemeConfig } from "@yext/visual-editor";
import { defaultThemeConfig } from "@yext/visual-editor";

export const themeConfig: ThemeConfig = {
  ...defaultThemeConfig,
  palette: {
    label: "Fitness Color Palette",
    styles: {
      primary: {
        label: "Primary",
        type: "color",
        default: "#ff0000",
        plugin: "colors",
      },

      secondary: {
        label: "Dark",
        type: "color",
        default: "#222222",
        plugin: "colors",
      },

      tertiary: {
        label: "Light",
        type: "color",
        default: "#ffffff",
        plugin: "colors",
      },

      // text: {
      //   label: "Text",
      //   type: "color",
      //   default: "#555555",
      //   plugin: "colors",
      // },

      // mutedText: {
      //   label: "Muted Text",
      //   type: "color",
      //   default: "#666666",
      //   plugin: "colors",
      // },
    },
  },

  headings: {
    label: "Headings",
    styles: {
      textColor: {
        label: "Text Color",
        type: "select",
        default: "var(--colors-palette-dark)",
        options: [
          {
            value: "var(--colors-palette-dark)",
            label: "Dark",
          },
          {
            value: "var(--colors-palette-primary)",
            label: "Primary",
          },
          {
            value: "var(--colors-palette-light)",
            label: "Light",
          },
        ],
        plugin: "colors",
      },

      fontWeight: {
        label: "Font Weight",
        type: "select",
        default: "700",
        options: [
          { value: "500", label: "Medium" },
          { value: "600", label: "Semibold" },
          { value: "700", label: "Bold" },
          { value: "800", label: "Extra Bold" },
        ],
        plugin: "fontWeight",
      },
    },
  },

  buttons: {
    label: "Buttons",
    styles: {
      background: {
        label: "Background",
        type: "select",
        default: "var(--colors-palette-light)",
        options: [
          {
            value: "var(--colors-palette-primary)",
            label: "Primary",
          },
          {
            value: "var(--colors-palette-light)",
            label: "Light",
          },
          {
            value: "var(--colors-palette-dark)",
            label: "Dark",
          },
        ],
        plugin: "colors",
      },

      textColor: {
        label: "Text Color",
        type: "select",
        default: "var(--colors-palette-dark)",
        options: [
          {
            value: "var(--colors-palette-dark)",
            label: "Dark",
          },
          {
            value: "var(--colors-palette-light)",
            label: "Light",
          },
        ],
        plugin: "colors",
      },

      fontWeight: {
        label: "Font Weight",
        type: "select",
        default: "600",
        options: [
          { value: "500", label: "Medium" },
          { value: "600", label: "Semibold" },
          { value: "700", label: "Bold" },
        ],
        plugin: "fontWeight",
      },
    },
  },
};

export default themeConfig;