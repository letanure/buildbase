import react from "@vitejs/plugin-react";
/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "./tests/vitest.setup.ts",
		coverage: {
			reporter: ["text", "html", "json-summary"],
			reportsDirectory: "./coverage",
			exclude: [
				"**/tests/**",
				"**/*.test.{ts,tsx}",
				"**/__mocks__/**",
				"**/node_modules/**",
				"**/build/**",
				"**/dist/**",
				"**/.next/**",
				"**/coverage/**",
				"**/postcss.config.*",
				"**/tailwind.config.*",
				"**/vite.config.*",
				"**/vitest.config.*",
				"**/next.config.*",
				"**/commitlint.config.*",
				"**/eslint.config.*",
				"**/*.d.ts",
			],
		},
	},
});
