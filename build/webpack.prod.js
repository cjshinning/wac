const fs = require('fs-extra');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');
const WebpackUploadPlugin = require('webpack-upload');
const settings = require('../config/settings');
const commonConfig = require('./webpack.common.js');


const basePath = path.join(settings.basePath, 'dist', settings.appid);

const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        path: path.resolve(settings.basePath, 'dist', settings.appid),
        publicPath: '//img1.37wanimg.com/test/pc/'
    },
    module: {
        rules: [
            {
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
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].chunk.css'
        }),
        new WebpackUploadPlugin({//上传测试环境
            // receiver: settings.hdUpload_37,
            receiver: settings.wwwUploadScript,
            // to: settings.appid,
            to: path.join('/www', settings.wwwDeployDomain, settings.appid),
            test: (filepath) => {
                //上传过滤
                let watchPath = path.join(settings.basePath, 'dist', settings.appid, filepath);
                if(/\.map$/g.test(filepath)){
                    return false;
                }
                if(/\.html$/g.test(filepath)){
                    return false;
                }
                if(!fs.existsSync(watchPath)){
                    return true;
                }
                let reg = /\.(png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)$/g;
                if(reg.test(filepath)){
                    return false;
                }
                if(/extras/g.test(filepath)){
                    return false;
                }
                return true;
            }
        }),
        // new WebpackUploadPlugin({//上传测试环境
        //     receiver: settings.wwwUploadScript,
        //     to: path.join('/www', settings.wwwTplsDomain, settings.appid),
        //     test: (filepath) => {
        //         //上传过滤
        //         let watchPath = path.join(settings.basePath, 'dist', settings.appid, filepath);
        //         if(/\.html$/g.test(filepath)){
        //             return true;
        //         }else{
        //             return false;
        //         }
        //         if(!fs.existsSync(watchPath)){
        //             return true;
        //         }
        //     }
        // })
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
}

module.exports = merge(commonConfig, prodConfig);