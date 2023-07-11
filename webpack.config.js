const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// mode
let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}
module.exports = {
  mode: mode,
  entry: {
    main: path.join(__dirname, './@modulr/app.js'),
  },
  // where to output dist
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'app/static'),
    // this places all images processed in an image folder
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        // reads lef to right
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'main.min.css',
    }),
    // new HtmlWebpackPlugin()
  ],
  optimization: {
    // This will enable CSS optimization only in production mode.
    minimizer: [new CssMinimizerPlugin(), new TerserJSPlugin({})],
    minimize: mode === 'development' ? false : true, // in development mode
  },
};
