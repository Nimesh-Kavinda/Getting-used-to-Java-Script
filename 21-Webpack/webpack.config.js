const path = require("path");


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist/assets"),
        filename : "bundel.js",
    },
    module: {
        rules: [
            {
                  test:/\.js$/,
                  exclude:/node_modules/,
                  use:"babel-loader"
            }
        ]
    },
    mode: "production"
}