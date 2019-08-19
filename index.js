const path = require('path');

module.exports = {
  plugins: [
    // '@vuepress/search',
    [
      '@vuepress/register-components',
      {
        componentsDir: [path.resolve(__dirname, 'components')]
      }
    ]
  ],
  enhanceAppFiles: path.resolve(__dirname, 'enhanceApp.js'),
  alias: {
    static: path.resolve(__dirname, 'static'),
    components: path.resolve(__dirname, 'components')
  },
  chainWebpack:config=> {
    config.module
      .rule('svg')
      .exclude.add(path.resolve('static/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(path.resolve('static/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
      .end();
  }
};
