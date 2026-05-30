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
		dts({ rollupTypes: true, tsconfigPath: "./tsconfig.app.json" }),
		preserveDirectives() as Plugin,
	],
	build: {
		lib: {
			cssFileName: "css/index",
			entry: {
				types: resolve(__dirname, "lib/styles/types/types.ts"),
				css: resolve(__dirname, "lib/css.ts"),
				container: resolve(__dirname, "lib/entries/container/index.ts"),
				layout: resolve(__dirname, "lib/entries/layout/index.ts"),
				"styled/button": resolve(__dirname, "lib/entries/styled/button/index.ts"),
				"styled/inputs/text": resolve(__dirname, "lib/entries/styled/inputs/text/index.ts"),
				"styled/inputs/text-area": resolve(__dirname, "lib/entries/styled/inputs/text-area/index.ts"),
				"styled/li": resolve(__dirname, "lib/entries/styled/li/index.ts"),
				"styled/ul": resolve(__dirname, "lib/entries/styled/ul/index.ts"),
				"texts/header": resolve(__dirname, "lib/entries/texts/header/index.ts"),
				"texts/p": resolve(__dirname, "lib/entries/texts/p/index.ts"),
				"texts/span": resolve(__dirname, "lib/entries/texts/span/index.ts"),
				"div-measure": resolve(__dirname, "lib/entries/div-measure/index.ts"),
				"loading-spinner": resolve(__dirname, "lib/entries/loading-spinner/index.ts"),
				"spring-open-close-height": resolve(__dirname, "lib/entries/spring-open-close-height/index.ts"),
				"spring-enter": resolve(__dirname, "lib/entries/spring-enter/index.ts"),
				"spring-enter-offset-by": resolve(__dirname, "lib/entries/spring-enter-offset-by/index.ts"),
				"spring-menu-transition": resolve(__dirname, "lib/entries/spring-menu-transition/index.ts"),
				icons: resolve(__dirname, "lib/entries/icons/index.ts"),
				"contexts/ui": resolve(__dirname, "lib/entries/contexts/ui/index.ts"),
				"contexts/notifications": resolve(__dirname, "lib/entries/contexts/notifications/index.ts"),
				admonition: resolve(__dirname, "lib/entries/admonition/index.ts"),
				avatar: resolve(__dirname, "lib/entries/avatar/index.ts"),
				"avatar-group": resolve(__dirname, "lib/entries/avatar-group/index.ts"),
				button: resolve(__dirname, "lib/entries/button/index.ts"),
				checkboxes: resolve(__dirname, "lib/entries/checkboxes/index.ts"),
				checkbox: resolve(__dirname, "lib/entries/checkbox/index.ts"),
				chip: resolve(__dirname, "lib/entries/chip/index.ts"),
				"tag-color": resolve(__dirname, "lib/entries/tag-color/index.ts"),
				"color-picker": resolve(__dirname, "lib/entries/color-picker/index.ts"),
				"gallery-modal": resolve(__dirname, "lib/entries/gallery-modal/index.ts"),
				"label-text": resolve(__dirname, "lib/entries/label-text/index.ts"),
				modal: resolve(__dirname, "lib/entries/modal/index.ts"),
				"global-event-portal": resolve(__dirname, "lib/entries/global-event-portal/index.ts"),
				portals: resolve(__dirname, "lib/entries/portals/index.ts"),
				"input-image": resolve(__dirname, "lib/entries/input-image/index.ts"),
				radio: resolve(__dirname, "lib/entries/radio/index.ts"),
				"input-text": resolve(__dirname, "lib/entries/input-text/index.ts"),
				"text-area": resolve(__dirname, "lib/entries/text-area/index.ts"),
				"inset-group": resolve(__dirname, "lib/entries/inset-group/index.ts"),
				"notification-system": resolve(__dirname, "lib/entries/notification-system/index.ts"),
				"select-spring": resolve(__dirname, "lib/entries/select-spring/index.ts"),
				"table-grid": resolve(__dirname, "lib/entries/table-grid/index.ts"),
				"table-row": resolve(__dirname, "lib/entries/table-row/index.ts"),
				"table-header": resolve(__dirname, "lib/entries/table-header/index.ts"),
				tabs: resolve(__dirname, "lib/entries/tabs/index.ts"),
				"toggle-switch": resolve(__dirname, "lib/entries/toggle-switch/index.ts"),
			},
		},
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: [
				{
					format: "es",
					entryFileNames(info) {
						if (info.name === "types") return "types.mjs";
						return "[name]/index.mjs";
					},
				},
				{
					format: "cjs",
					entryFileNames(info) {
						if (info.name === "types") return "types.cjs";
						return "[name]/index.cjs";
					},
				},
			],
		},
	},
});
