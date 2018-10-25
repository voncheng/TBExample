const { injectBabelPlugin } = require("react-app-rewired");
const path = require("path");

module.exports = function override (config) {
  // config = injectBabelPlugin(["import", { libraryName: "antd", libraryDirectory: "es", style: true }], config);
  config = injectBabelPlugin("babel-plugin-transform-decorators-legacy", config);
  config.resolve = {
    extensions: [
      ".js",
      ".json",
      ".scss",
      ".css",
      ".jsx",
      ".less",
    ],
    alias: {
      tomatoScan: path.join(__dirname, "./src"),
      srcDir: path.resolve(__dirname, "./src"),
      pages: path.join(__dirname, "./src/pages/"),
    }
  };
  return config;
};
