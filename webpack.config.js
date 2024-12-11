const path = require('path');

module.exports = {
  entry: {
    first: {
      import: './actions/first.ts',
      library: {
        type: 'commonjs-static',
      },
    },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  target: 'node',
  mode: 'production',
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    preferRelative: true,
  },
};
