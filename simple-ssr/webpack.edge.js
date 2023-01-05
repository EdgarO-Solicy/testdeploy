const path = require("path");

module.exports = {
  entry: "./src/edge/index.js",

  target: "node",

  externals: [],

  output: {
    path: path.resolve("edge-build"),
    filename: "index.js",
    library: "index",
    libraryTarget: "umd",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.([cm]?ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: "css-loader",
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
