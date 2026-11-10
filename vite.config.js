import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import yextSSG from "@yext/pages/vite-plugin";
import { yextVisualEditorPlugin } from "@yext/visual-editor/plugin";

export default defineConfig({
  plugins: [
    react(),
    yextVisualEditorPlugin({
      localEditor: {
        enabled: true,
      },
    }),
    yextSSG(),
  ],
  
  // server: {
  //   // port: 5173,
  //   // strictPort: true,
  //   // // Forces Vite to intercept cross-origin rules for Yext's useMessage hook
  //   // headers: {
  //   //   "Access-Control-Allow-Origin": "http://localhost",
  //   //   "Access-Control-Allow-Private-Network": "true"
  //   // },
  //   // // Allows the proxy origin checks to skip the port validation structure
  //   // cors: {
  //   //   origin: "http://localhost",
  //   //   credentials: true
  //   // }
  // },
  // Overrides Vite's internal global variables during local dev compilation
  // define: {
  //   "window.location.origin": '"http://localhost"'
  // }

});
