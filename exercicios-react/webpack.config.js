// Arquivo de configuração da aplicação
const webpack = require('webpack')

module.exports = {
    entry: './ex/index.jsx',
    ouput: {
        path: __dirname + '/public',        // __dirname variavel de ambiente do diretorio atual
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve:{
        extensions: ['', '.js', '.jsx']
    },
    module:{
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],       // presets = tudo que quer traduzir
                }
            }
        ]
    }
}