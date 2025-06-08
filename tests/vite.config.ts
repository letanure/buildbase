import react from "@vitejs/plugin-react";
// vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/tests/setup.ts",
	},
});
