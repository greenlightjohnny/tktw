import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
//import CopyWebpackPlugin from "copy-webpack-plugin";

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

  entry: path.join(__dirname, "src/index.tsx"),
  output: {
    //path: path.resolve(__dirname, "./build"),
    //filename: "js/[name]-[chunkhash]-dev.js",
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

        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
              //include: path.resolve(__dirname, "src/index.css"),
            },
          },
          //"style-loader",
          "css-loader",
          "postcss-loader",
        ],
        //use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      // {
      //   test: /\.(woff|woff2)$/,
      //   use: {
      //     loader: "resolve-url-loader",
      //     options: {
      //       name: "fonts/[name].[ext]",
      //       limit: 5000,
      //       mimetype: "application/font-woff",
      //     },
      //   },
      // },
      // {
      //   test: /\.(ttf|eot)$/,
      //   use: {
      //     loader: "resolve-url-loader",
      //     options: {
      //       name: "fonts/[name].[ext]",
      //     },
      //   },
      // },
      // {
      //   test: /\.(png|jp(e*)g|svg)$/,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         limit: 8000,
      //         name: "images/[hash]-[name].[ext]",
      //         publicPath: "images",
      //       },
      //     },
      //   ],
      // },
    ],
  },
  resolve: {
    // modules: [
    //   path.resolve("./src/"),
    //   "node_modules",
    //   path.resolve("./images/"),
    // ],
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
      filename: "styles.css",
      chunkFilename: "[name]-dev2.css",
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
