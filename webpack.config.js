const webpack = require('webpack');

module.exports = {
    entry: {
      'user': __dirname + '/my_project/static/js/user/user.js',
    },
    output: {
      path: __dirname + '/my_project/static/js/build',
      publicPath: 'static/js/build/',
      filename: '[name].js'
    },
    resolve: {
      modules: [
        __dirname + '/node_modules',
      ],
    },
    watch: true,
    watchOptions: {
      poll: true
    },
    mode: 'development',
    module: {
      rules: [
        {
          	test: /\.css$/,
          	use: ['style-loader', 'css-loader'],
        },
        {
	        test: /\.handlebars$/,
	        loader: "handlebars-loader",
        },
      ]
    },
    externals: {
      "jquery": "$",
    },
}