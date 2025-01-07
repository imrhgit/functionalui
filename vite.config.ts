import react from "@vitejs/plugin-react";
import { resolve } from "path";
import preserveDirectives from "rollup-preserve-directives";
import { defineConfig, type Plugin } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		dts({ rollupTypes: true }),
		preserveDirectives() as Plugin,
	],
	build: {
		// library entry and output settings
		lib: {
			entry: {
				main: resolve(__dirname, "lib/main.ts"),
				types: resolve(__dirname, "lib/styles/types/types.ts"),
			},
		},
		// bundler options
		// externalize react-related imports
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"react/jsx-runtime": "react/jsx-runtime",
				},
			},
		},
	},
});
