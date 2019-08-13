const path = require('path');

module.exports = ()=>({
  plugins: [
      // '@vuepress/search',
      ['@vuepress/register-components', {
        componentsDir: [
          path.resolve(__dirname, 'components')
        ]
      }],
      'svg-sprite-loader',
    ],
    enhanceAppFiles: path.resolve(__dirname, 'enhanceApp.js'),
    alias: {
      static: path.resolve(__dirname, 'static'),
      components: path.resolve(__dirname,'components')
    },
})