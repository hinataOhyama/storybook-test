import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ['../app/**/*.stories.tsx'],
  features: { experimentalRSC: true },
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "msw-storybook-addon"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["..\\public"],
};
export default config;
