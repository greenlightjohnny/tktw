import path from "path";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { HotModuleReplacementPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

// const indexHtml = new HtmlWebpackPlugin({
//   template: "./build/index.html",
//   filename: "./index.html",
//   inject: true,
//   chunks: ["jewel"],
// });

const config: webpack.Configuration = {
  mode: "production",
  //entry: "./src/index.tsx",
  entry: path.join(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "./build"),
    //path: path.resolve("./build"),
    filename: "js/[name]-[chunkhash].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        include: path.resolve(__dirname, "src"),
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
        include: path.resolve(__dirname, "src/index.css"),
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
              //include: path.resolve(__dirname, "src/index.css"),
            },
          },
          //\\"style-loader",
          //MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
        // use: [
        //   "style-loader",
        //   {
        //     loader: MiniCssExtractPlugin.loader,
        //     options: {
        //       //hmr: argv.mode === 'development'
        //     },
        //   },
        //   {
        //     loader: "css-loader",
        //     options: {
        //       importLoaders: 1,
        //     },
        //   },
        //   "postcss-loader",
        // ],
        //use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve("./src/"),
      "node_modules",
      path.resolve("./build/"),
      path.resolve("./build/**/*"),
    ],
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      //filename: "./index.html",
      //template: "./src/index.html",
      //filename: "./index.html",
      // inject: true,
      // chunks: ["jewel"],
    }),
    // indexHtml,
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name]-[chunkhash].css",
      chunkFilename: "[id].css",
    }),
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
  ],
};

export default config;
