const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.min.js',
        path: __dirname + '/public/'
    }
}