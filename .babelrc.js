const env = require('./env.js')

module.exports = {
  "env": {
    "test": {
      "presets": [
        ["env", { "modules": "commonjs" }],
        "next/babel"
      ]
    }
  },
  "presets": [
    "next/babel"
  ],
  "plugins": [
    ['transform-define', env],
    [
      "import",
      {
        "libraryName": "antd"
      }
    ],
    [
      "module-resolver",
      {
        "root": [
          "."
        ],
        "alias": {
          "styles": "./styles"
        },
        "cwd": "babelrc"
      }
    ],
    [
      "wrap-in-js",
      {
        "extensions": [
          "less$"
        ]
      }
    ],
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ]
  ],
  "ignore": []
}