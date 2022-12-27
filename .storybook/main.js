module.exports = {
  "stories": ["../packages/**/*.stories.mdx", "../packages/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-actions", "@storybook/addon-interactions", "@storybook/addon-a11y"],
  framework: "@storybook/react",
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false
      }
    }
  },
  core: {
    builder: "webpack5"
  }
};