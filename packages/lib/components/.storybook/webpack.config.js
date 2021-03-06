const { storybook } = require('@pyxis/webpack/build/configs/typescript');
const { sass } = require('@pyxis/webpack/build/parts/sass');
const { webfonts } = require('@pyxis/webpack/build/parts/webfonts');
const webpackMerge = require('webpack-merge');
const { assign } = Object;
const { svg } = require('@pyxis/webpack/build/parts/svg');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config }) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  const result = webpackMerge.smartStrategy({
    plugins: 'append',
  })(
    config,
    storybook(),
    sass(),
    webfonts(),
    svg()
  );

  const forbiddenStorybookLoaders = [
    /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
    /\.css$/,
  ].map((loader) => loader.toString());

  // Remove css since we are using stylable
  // Stylable causing issue when loader for css is part of it
  // Since storybook adding it by default we have to manually remove it
  const sanitized = assign({}, result ,{
    module: {
      rules: result.module.rules
        .filter(rule => (
          !forbiddenStorybookLoaders.includes(rule.test.toString())
        )),
    },
  });

  return sanitized;
};
