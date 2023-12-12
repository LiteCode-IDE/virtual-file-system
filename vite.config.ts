import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.tsx"),
      name: "Virtual File System",
      fileName: (format) => `@litecode-ide/virtual-file-system.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react()],
});
