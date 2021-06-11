const fs = require('fs-extra');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const CopyPlugin = require("copy-webpack-plugin");
const settings = require('../config/settings');
const commonConfig = require('./webpack.common.js');
const htmlTohtmWebpackPlugin = require('../plugins/html2htm-webpack-plugin');

const deployConfig = {
    mode: 'production',
    devtool: 'none',
    output: {
        filename: 'js/[name].[contenthash:8].js',
        chunkFilename: 'js/[name].[contenthash:8].js',
        path: path.resolve(settings.basePath, 'dist', settings.appId),
        publicPath: `//img1.37wanimg.com/${settings.appId}/`,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash:8].[ext]',
                        outputPath: 'images',
                        limit: 10240,
                    }
                }
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name][contenthash:8].content.css'
        }),
        new CopyPlugin([
            { from: path.join(settings.basePath,'src',settings.appId,'extras/'), to: path.join(settings.basePath,'dist',settings.appId,"extras/") }
        ]),
        new htmlTohtmWebpackPlugin()
    ],
    optimization: {
    },
}

let scssRule = null;
if(settings.platform === 'pc'){
    scssRule = {
        test: /\.scss$/i,
        use: [
            MiniCssExtractPlugin.loader,
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
            MiniCssExtractPlugin.loader,
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
deployConfig.module.rules.unshift(scssRule);

module.exports = merge(commonConfig, deployConfig);