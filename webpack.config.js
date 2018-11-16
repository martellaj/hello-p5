const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/sketch.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "sketch.js"
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })]
};
