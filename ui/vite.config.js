import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
import toast from "react-hot-toast";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss("./tailwind.config.js"), toast()],
});
