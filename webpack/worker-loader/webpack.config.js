const path = require("path");
const srcPath = path.join(__dirname, "src");
module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [/node_modules/, /\.worker\.ts$/],
      },
      {
        test: /\.worker\.ts$/,
        use: [
          {
            loader: "worker-loader",
            options: { inline: "no-fallback" },
          },
          // {
          //   loader: "babel-loader",
          //   options: {
          //     presets: ["@babel/preset-env"],
          //   },
          // },
          {
            loader: "ts-loader",
            options: {
              happyPackMode: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
