const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.min.js',
        path: __dirname + '/public/'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader', // Adiciona CSS injetando a tag style
                'css-loader' // interpreta @import, url()...
            ]
        }]
    }
}