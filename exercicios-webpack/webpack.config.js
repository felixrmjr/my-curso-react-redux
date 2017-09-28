// Arquivo de configuração da aplicação
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// presets = tudo que quer traduzir
module.exports = {
    entry: './ex/index.js',
    ouput: {
        path: __dirname + '/public',        // __dirname variavel de ambiente do diretorio atual
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module:{
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'], 
                    plugins: ['transform-object-rest-spread']
                }
            },
            {
                test: /.css?$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
            }
        ]
    }
}