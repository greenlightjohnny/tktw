import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
//import * as webpackDevServer from "webpack-dev-server";
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import ESLintPlugin from "eslint-webpack-plugin";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  mode: "development",

  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,

        use: ["style-loader", "css-loader", "postcss-loader"],
        //use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new MiniCssExtractPlugin({
      filename: "index-dev.css",
      chunkFilename: "index-dev2.css",
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "build"),
    //static: { directory: path.join(__dirname, "build") },
    // static: {
    //   directory: path.join(__dirname, "build"),
    // },
    //historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true,
  },
};

export default config;
