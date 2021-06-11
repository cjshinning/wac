const fs = require('fs-extra');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const WebpackUploadPlugin = require('webpack-upload');
const CopyPlugin = require("copy-webpack-plugin");
const settings = require('../config/settings');
const commonConfig = require('./webpack.common.js');
const htmlTohtmWebpackPlugin = require('../plugins/html2htm-webpack-plugin');

const tplUploadDir = (settings.appId.indexOf('pc') !== -1) ? path.join('/www', settings.wwwTplsDomain, settings.appId.split('/pc')[0]) : path.join('/www', settings.wwwTplsDomain, settings.appId);

const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
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
        new htmlTohtmWebpackPlugin(),
        new WebpackUploadPlugin({//上传资源到测试环境
            receiver: settings.wwwUploadScript,
            to: path.join('/www', settings.wwwDeployDomain, settings.appId),
            test: (filepath) => {
                //上传过滤
                let watchPath = path.join(settings.basePath, 'dist', settings.appId, filepath);
                // let filterPath = ['.map', '.DS_Store', '.vscode', '.idea'];
                // filterPath.forEach((item)=>{
                //     let re = new RegExp(item+'$', 'g');
                //     if(re.test(filepath)){
                //         return false;
                //     }
                // })
                if(/\.map$/g.test(filepath)){
                    return false;
                }
                if(/\.DS_Store$/g.test(filepath)){
                    return false;
                }
                if(/\.vscode$/g.test(filepath)){
                    return false;
                }
                if(/\.idea$/g.test(filepath)){
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
            'sass-loader',
            {
                loader: 'sass-resources-loader',
                options: {
                    resources: [
                        path.resolve(settings.basePath,'src',settings.appId, 'src/assets/css/sprite.scss')
                    ]
                }
            }
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
prodConfig.module.rules.unshift(scssRule);

module.exports = merge(commonConfig, prodConfig);