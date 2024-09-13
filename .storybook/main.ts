import type { StorybookConfig } from "@storybook/react-webpack5";
import { resolve } from '../webpack/webpack.resolve';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async webpackFinal(config, { configType }) {
    config.resolve = {
      ...config.resolve || {},
      alias: {
        ...config.resolve?.alias || {},
        ...resolve.alias,
      }
    }
    return config;
  },
};

export default config;
