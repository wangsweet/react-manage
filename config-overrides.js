const { override, fixBabelImports, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
const path = require("path");
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    //别名的配置
    addWebpackAlias({
        "@": path.join(__dirname, "./src"),
        "actions": path.join(__dirname, "./src/actions"),
        "api": path.join(__dirname, "./src/api"),
        "common": path.join(__dirname, "./src/common"),
        "components": path.join(__dirname, "./src/components"),
        "layout": path.join(__dirname, "./src/layout"),
        "pages": path.join(__dirname, "./src/pages"),
        "router": path.join(__dirname, "./src/router"),
        "static": path.join(__dirname, "./src/static"),
        "store": path.join(__dirname, "./src/store"),
        "utils": path.join(__dirname, "./src/utils")
    }),
    addDecoratorsLegacy()
);