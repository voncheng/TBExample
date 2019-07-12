const {
  override,
  disableEsLint,
  addDecoratorsLegacy,
  addWebpackAlias,
  addWebpackResolve
} = require("customize-cra");
const path = require("path");

module.exports = override (
  // config = injectBabelPlugin(["import", { libraryName: "antd", libraryDirectory: "es", style: true }], config);
  disableEsLint(),
  addDecoratorsLegacy(),
  addWebpackResolve({extensions:[
      ".js",
      ".json",
      ".scss",
      ".css",
      ".jsx",
      ".less",
    ]
  }),
  addWebpackAlias({
    tomatoScan: path.join(__dirname, "./src"),
      srcDir: path.resolve(__dirname, "./src"),
      pages: path.join(__dirname, "./src/pages/")
  })
);
