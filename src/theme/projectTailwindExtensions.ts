// extends defaultThemeTailwindExtensions


import { defaultThemeTailwindExtensions } from "@yext/visual-editor";

export const projectTailwindExtensions = {
  ...defaultThemeTailwindExtensions,

  colors: {
    ...defaultThemeTailwindExtensions.colors,

    // your existing colours
        brand: "#F41E1E",
        dark: "#1c1c1c",
        darker: "#202020",
        black: "#000000",
  },

  fontSize: {
    ...defaultThemeTailwindExtensions.fontSize,

    // your existing font sizes (if any)
  },

  keyframes: {
    // your current keyframes

    fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInLeft: {
      "0%": { opacity: "0", transform: "translateX(-40px)" },
      "100%": { opacity: "1", transform: "translateX(0)" },
        },
  },

  animation: {
    // your current animations
    fadeIn: 'fadeIn 0.8s ease-out',
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        fadeInRight: 'fadeInRight 1.5s ease-out forwards',
        fadeUp: 'fadeUp 0.8s ease-out both',
        slideInRight: 'slideInRight 1s ease-out both',
        slideInLeft: 'slideInLeft 0.8s ease-out forwards',
        slideInLeftSlow: 'slideInLeft 1.5s ease-out forwards',
        fadeDelay: 'fadeUp 1.2s ease-out both',
        fadeDelay2: 'fadeUp 1.4s ease-out both',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        fadeInLeft: "fadeInLeft 1.5s ease-out both",
        },

  screens: {
    // your current screens
     xs: "576px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        },

  spacing: {
    // your current spacing additions
  },

  scale: {
    // your current scale additions
    1.02: "1.02",

  },

  container: {
    // your current container settings
    center: true,
  },
};