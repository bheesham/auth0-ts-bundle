import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
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
    chunkFormat: 'commonjs',
  },
  externals: [
    function(ctx, callback) {
      if (ctx.request && /^@(slack|aws-sdk)/.test(ctx.request)) {
        return callback(null, `node-commonjs ${ctx.request}`);
      }
      callback()
    },
  ],
  target: 'es2022',
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

export default config;
