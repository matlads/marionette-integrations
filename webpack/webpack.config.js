import path from "path";
import webpack from "webpack";
const __dirname = import.meta.dirname;
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: {
    app: {
      import: "./app/initialize.js",
      dependOn: ["underscore", "jquery", "backbone", "marionette"],
    },
    underscore: "underscore",
    jquery: "jquery",
    backbone: "backbone",
    marionette: "backbone.marionette",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./public",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jst$/,
        loader: "underscore-template-loader",
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      _: "underscore",
    }),
    new HtmlWebpackPlugin({
      title: "Webpack with MarionetteJS",
      meta: {
        viewport:
          "user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi",
      },
    }),
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "app/components/"),
    },
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public"),
    clean: true,
    publicPath: "/",
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  },
};
