const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
  // モードの指定は必須。「webpack --development」でもOK
  // mode: 'development',

  // エントリーファイル
  entry: './src/main.js',

  // バンドルしたファイルの出力先
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js',
  },

  // 
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },

  // import文で.tsファイルを解決
  resolve: {

  },

  // プラグイン
  plugins: [
    new VueLoaderPlugin(), // .vueファイルを読み込めるようにする
  ],

  // ES5向けの指定
  target: ['web', 'es5']
}