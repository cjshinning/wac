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
        path: path.resolve(settings.basePath,'dist',settings.appId),
        publicPath: '/'
    },
    devServer: {
        contentBase: path.resolve(settings.basePath,'src',settings.appId),
        open: true,
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [
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

let scssRule = null;
if(settings.platform === 'pc'){
    scssRule = {
        test: /\.scss$/i,
        use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2
              }
            },
            'postcss-loader',
            'sass-loader'
        ]
    };
}else{
    scssRule = {
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
    };
}
devConfig.module.rules.unshift(scssRule);


module.exports = merge(commonConfig, devConfig);