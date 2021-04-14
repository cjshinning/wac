const fs = require('fs-extra');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const WebpackUploadPlugin = require('webpack-upload');
const CopyPlugin = require("copy-webpack-plugin");
const settings = require('../config/settings');
const commonConfig = require('./webpack.common.js');
const htmlTohtmWebpackPlugin = require('../plugins/html2htm-webpack-plugin');

const tplUploadDir = (settings.appid.indexOf('pc') !== -1) ? path.join('/www', settings.wwwTplsDomain, settings.appid.split('/pc')[0]) : path.join('/www', settings.wwwTplsDomain, settings.appid);

const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    output: {
        filename: 'js/[name].[contenthash:8].js',
        chunkFilename: 'js/[name].[contenthash:8].js',
        path: path.resolve(settings.basePath, 'dist', settings.appid),
        publicPath: `//img1.37wanimg.com/${settings.appid}/`,
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
            { from: path.join(settings.basePath,'src',settings.appid,'extras/'), to: path.join(settings.basePath,'dist',settings.appid,"extras/") }
        ]),
        new htmlTohtmWebpackPlugin(),
        new WebpackUploadPlugin({//上传资源到测试环境
            receiver: settings.wwwUploadScript,
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
                if(/\.htm$/g.test(filepath)){
                    return false;
                }
                if(!fs.existsSync(watchPath)){
                    return true;
                }
            }
        }),
        new WebpackUploadPlugin({//上传模板到测试环境
            receiver: settings.wwwUploadScript,
            to: tplUploadDir,
            test: (filepath) => {
                //上传过滤
                if(/\.html$/g.test(filepath)){
                    return false;
                }
                if(/\.htm$/g.test(filepath)){
                    return true;
                }
            }
        })
    ],
    optimization: {
    },
}

module.exports = merge(commonConfig, prodConfig);