module.exports = [
  {
    type: "template",
    src: {
      cwd: "templates",
      pattern: "**/*"
    },
    dest: ".",
    args: {
      name: null,
      description: null,
      year: (new Date()).getFullYear()
    }
  },
  {
    type: "npm-install",
    dependencies: [
      "babel-runtime"
    ],
    devDependencies: [
      "babel-cli",
      "babel-eslint",
      "babel-plugin-transform-runtime",
      "babel-preset-es2015",
      "babel-preset-es2016",
      "babel-preset-es2017",
      "babel-preset-stage-2",
      "babel-preset-stage-3",
      "babel-register",
      "eslint",
      "eslint-config-airbnb-base",
      "eslint-plugin-async-await",
      "eslint-plugin-babel",
      "eslint-plugin-import",
      "mocha",
      "rimraf"
    ]
  },
  {
    type: "shell",
    commands: [
      "git init",
      "git add .",
      "git commit -m 'Initialized by clow.'"
    ]
  }
];
