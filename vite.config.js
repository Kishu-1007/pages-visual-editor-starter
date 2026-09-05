import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import yextSSG from "@yext/pages/vite-plugin";
import { yextVisualEditorPlugin } from "@yext/visual-editor/plugin"

export default defineConfig({
  plugins: [react(), yextVisualEditorPlugin({
      localEditor: {
        enabled: true
      },
    }), yextSSG()],

    server: {
     // historyApiFallback: true,
    port: 8080,
    strictPort: true,
    open: '/edit',     // Opens/pivots the server root path immediately into the edit route. Forces the preview instance to initialize at http://localhost:8080/edit
    host: 'localhost' // Ensures it binds strictly to 'localhost' instead of 127.0.0.1
    // cors: true,
  },
  
  // Add this block to force the library test router into active state
  define: {
    __VISUAL_EDITOR_TEST__: JSON.stringify(true),
  }
});
