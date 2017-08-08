const webpack = require('webpack');
const config = {
    entry:  __dirname + '/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
      rules: [
        {
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {
            test: /\.svg$/,
            use: 'raw-loader'
        },
        {
            test: /\.css$/,
            use: 'css-loader'
        },
        {
            test: /\.json$/,
            use: 'json'
        }
      ],
    },
};
module.exports = config;