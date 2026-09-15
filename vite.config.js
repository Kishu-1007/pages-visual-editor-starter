import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import yextSSG from "@yext/pages/vite-plugin";
import { yextVisualEditorPlugin } from "@yext/visual-editor/plugin"

export default defineConfig(({ command, mode }) => {
  // Evaluates true when compiling on the remote cloud sandbox cluster
  const isSandboxEnv = process.env.NODE_ENV === 'production' || mode === 'production';


  return {
    // CONDITIONAL PLUGINS SETUP:
    // When deploying to the sandbox platform, completely omit yextVisualEditorPlugin.
    // This strips out the middleware that triggers the broken 200 websocket handshake.

    plugins: [
      react(),
      ...(!isSandboxEnv ? [yextVisualEditorPlugin({ localEditor: { enabled: true } })] : []),
      yextSSG()
    ],

    // server: {
    //   port: 8080,
    //   // strictPort: true,
    //   host: 'localhost',
    //   hmr: isSandboxEnv ? false : {
    //     protocol: 'ws',
    //     host: 'localhost',
    //     port: 8080
    //   }
    // },


    optimizeDeps: {
      esbuildOptions: {
        target: "es2022",
      },
    },
    build: {
      target: "es2022",
    },

    // Add this block to force the library test router into active state
    // define: {
    //   __VISUAL_EDITOR_TEST__: JSON.stringify(false),
    // }
  };
});
