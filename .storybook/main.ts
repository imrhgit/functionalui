import type { StorybookConfig } from "@storybook/react-vite";
// import { mergeConfig } from "vite";
// import { default as tsconfigPaths } from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: ["../lib/**/*.mdx", "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
  // typescript: {
  //   check: false,
  //   skipCompiler: false,
  //   reactDocgenTypescriptOptions: {
  //     compilerOptions: {
  //       paths: {
  //         "functionalui": ["../lib/main.ts"],
  //       },
  //     },
  //   },
  // },
};
export default config;
