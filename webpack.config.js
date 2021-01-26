const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname,'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
    }, {
      test: /\.(tsx|ts)$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loader: {
          sass: 'vue-style-loader!css-loader!sass-loader'
        }
      },
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: { sourceMap: true }
        },
        {
          loader: "postcss-loader",
          options: { sourceMap: true, config: {path: path.resolve(__dirname,'src/js/postcss.config.js')}  }
        },  
      ],
    },  {
      test: /\.sass$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: { sourceMap: true }
        },
        {
          loader: "postcss-loader",
          options: { sourceMap: true, config: {path: './src/js/postcss.config.js'}  }
        },
        {
          loader: "sass-loader",
          options: {  sourceMap: true,  implementation: require('sass') }
        },
      ],
    },{
      test: /\.(eot|woff|ttf|woff2)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '/fonts/[name].[ext]'
          }
        }
      ]
    },{
      test: /\.(jpg|png|svg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '/images/[name].[ext]'
          }
        }
      ]
    },]
  },
  devServer: {
    contentBase: './dist',
    overlay: true,
    historyApiFallback: true,
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.js",
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html', 
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
}
