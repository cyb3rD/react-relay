module.exports = {
  entry: "./public/js/app.js",
  output: {
    path: __dirname + "/public/js",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
