const mode = process.env.NODE_ENV;
const modeDev = mode !== 'production';
const jsExtension = (modeDev) ? '.js' : '.min.js';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: mode,
    entry: './src/index.js',
    output: {
        filename: 'bundle' + jsExtension,
        path: __dirname + '/public/'
    },
    devServer: {
        contentBase: './public',
        port: 9000
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader, // extrai css para um arquivo externo
                'css-loader', // interpreta @import, url()...
                'sass-loader'
            ]
        }]
    }
}