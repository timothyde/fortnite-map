const env = require("./env.js");

module.exports = {
  plugins: [
    ["transform-define", env],
    [
      "import",
      {
        libraryName: "antd"
      }
    ],
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          styles: "./styles"
        },
        cwd: "babelrc"
      }
    ],
    [
      "wrap-in-js",
      {
        extensions: ["less$"]
      }
    ],
    [
      "styled-components",
      {
        ssr: true,
        displayName: true,
        preprocess: false
      }
    ]
  ],
  ignore: [],
  env: {
    development: {
      presets: ["next/babel"]
    },
    production: {
      presets: ["next/babel"]
    },
    test: {
      presets: [["next/babel", { "preset-env": { modules: "commonjs" } }]]
    }
  }
};
