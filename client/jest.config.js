module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
  globals: {
    "vue-jest": {
      babelConfig: {
        plugins: ["babel-plugin-transform-es2015-modules-commonjs"],
      },
    },
  }
}
