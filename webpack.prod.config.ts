import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { HotModuleReplacementPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const indexHtml = new HtmlWebpackPlugin({
  template: "./build/index.html",
  filename: "./index.html",
  inject: true,
  chunks: ["jewel"],
});

const config: webpack.Configuration = {
  mode: "production",
  entry: "./src/index.tsx",
  //entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    //path: path.resolve(__dirname, "./dist"),
    path: path.resolve("./build"),
    filename: "js/[name]-[hash].js",
    publicPath: "/spa/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        //include: path.resolve(__dirname, "src"),
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
        //include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          //"style-loader",
          //MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
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
    ],
  },
  resolve: {
    modules: [
      path.resolve("./src/"),
      "node_modules",
      path.resolve("./build/"),
      path.resolve("./build/**/*"),
    ],
    extensions: [".tsx", ".ts", ".js", ".css"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: "./build/index.html",
      // filename: "./index.html",
      template: "./src/index.html",
      //filename: "./index.html",
      inject: true,
      chunks: ["jewel"],
    }),
    // indexHtml,
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name]-[hash].css",
      chunkFilename: "[id].css",
    }),
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
  ],
};

export default config;
