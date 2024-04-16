import custom from '../webpack.common.js'; // 👈 Custom Webpack configuration being imported.

const config = {
    framework: {
        name: '@storybook/react-webpack5',
        options: {
            // ...
        },
    },
    stories: ['../stories/*.stories.js'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-styling'
    ],
    presets: [
        '@storybook/preset-create-react-app'
    ],
    staticDirs: ['../public'],
    webpackFinal: async (config) => {
        return {
          ...config,
          module: { ...config.module, rules: [...config.module.rules, ...custom.module.rules] },
        };
      },
};

export default config;