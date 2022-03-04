const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/GB__Vue.js_from-24.02.22/gb__vue-1.1-calculator/'
    : '/'
}
