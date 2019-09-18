const paths = require("../paths")

module.exports = {
  extensions: [".js", ".mjs", ".ts", ".tsx", ".json", ".jsx", ".scss"],
  modules: paths.resolveModules
}
