const path = require('path');
const merge = require('webpack-merge');
const settings = require('../config/settings');
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve(settings.basePath,'dist',settings.appid)
    },
    devServer: {
        contentBase: path.resolve(settings.basePath,'src',settings.appid),
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    {
                      loader: 'css-loader',
                      options: {
                        importLoaders: 2
                      }
                    },
                    {
                        loader: 'px2rem-loader',
                        options: {
                          remUni: 75,
                          remPrecision: 8
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images',
                        limit: 10240
                    }
                }
            },
        ]
    },
}

module.exports = merge(commonConfig, devConfig);