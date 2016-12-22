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
      "mocha",
      "rimraf"
    ]
  },
  {
    // install eslint preset
    type: "shell",
    commands: [
      "npm info 'eslint-config-airbnb-base@latest' peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --DE 'eslint-config-airbnb-base@latest'"
    ]
  },
  {
    type: "shell",
    commands: [
      "git init",
      "git add .",
      "git commit -m 'Initialized by clow-template-babel.'"
    ]
  }
];
