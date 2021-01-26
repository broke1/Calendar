module.exports = {
  plugins: [
    require('autoprefixer'),
    require('css-mqpacker'), 
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
      
  ]
}

// если не ошибаюсь натсройки для sass  для webpack
