const path = require("path");
const WatchExternalFilesPlugin = require("webpack-watch-external-files-plugin");

module.exports = {
  entry: {
    bundle: "./client/index.tsx",
    header: "./client/header-client.tsx",
  },
  target: ["web", "es5"],
  mode: "development",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new WatchExternalFilesPlugin({
      files: ["./client/**/*.tsx"],
    }),
  ],
};
