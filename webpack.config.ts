import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";
import "webpack-dev-server";
import FileManagerPlugin from "filemanager-webpack-plugin";
import normalizePath from "normalize-path"; // для винды, без этого не работает удаление
import MiniCssExtractPlugin from "mini-css-extract-plugin";
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const options: Configuration = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  devtool: "inline-source-map",
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.([cm]?ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: "asset/resource",
      // },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   type: "asset/resource",
      // },
      // {
      //   test: /\.js$/,
      //   use: "babel-loader",
      //   exclude: /node_modules/,
      // },
      // {
      //   test: /\.pug$/,
      //   loader: "pug-loader",
      // },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      //   template: path.join(__dirname, "src", "template.html"),
      template: path.join(__dirname, "src", "index.html"),
      filename: "index.html",
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ["dist"].map((it) => normalizePath(path.join(__dirname, it))),
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  devServer: {
    watchFiles: path.join(__dirname, "src"),
    port: 9000,
  },
  // optimization: {
  //   minimizer: [
  //     new ImageMinimizerPlugin({
  //       minimizer: {
  //         implementation: ImageMinimizerPlugin.imageminMinify,
  //         options: {
  //           plugins: [
  //             ["gifsicle", { interlaced: true }],
  //             ["jpegtran", { progressive: true }],
  //             ["optipng", { optimizationLevel: 5 }],
  //             ["svgo", { name: "preset-default" }],
  //           ],
  //         },
  //       },
  //     }),
  //   ],
  // },
};

export default options;
