import react from "@vitejs/plugin-react";
import path from "node:path";
/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "../src"),
		},
	},
	plugins: [react()],
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "./tests/vitest.setup.ts",
		coverage: {
			reporter: ["text", "html", "json-summary"],
			reportsDirectory: "./coverage",
			include: ['src/**/*.{test}.{ts,tsx}'],
			exclude: [
				"e2e",
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
