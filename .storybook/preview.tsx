/**
 * 20250111_1131 to include react-jsx in mdx, need to rename preview.ts to preview.tsx
 **/
import type { Preview } from "@storybook/react";
import "../lib/styles/css/default.css";
import "../lib/styles/css/styled.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
