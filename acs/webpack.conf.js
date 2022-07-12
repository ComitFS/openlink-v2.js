const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
          output: { 
             ascii_only: true 
          },
        },
      }),
    ],
  }
};  