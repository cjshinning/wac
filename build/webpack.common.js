const path = require('path');
const settings = require('../config/settings');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(settings.basePath,'src',settings.appid,'src/main.js'),
        vendor: ['vue', 'vue-router'],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.vue']
    },
    module: {
        rules: [
            { 
                test: /\.jsx?$/, 
                include: path.resolve(settings.basePath,'src'),
                use: [{
                    loader:  'babel-loader'
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.vue$/i,
                use: {
                    loader: 'vue-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(settings.basePath,'src',settings.appid,'index.html'),
            publicPath: 'www.baidu.com'
        }), 
        // new AddAssetHtmlPlugin({ 
        //     filepath: path.resolve(settings.basePath,'src',settings.appid,'extras/js/flexible.js'),
        //     publicPath: `//img1.37wanimg.com/${settings.appid}/extras/js`
        // }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    performance: false,
    // optimization: {
    //     usedExports: true,
    //     splitChunks: {
    //         chunks: 'all',
    //         cacheGroups: {
    //             vendors: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 priority: -10,
    //                 name: 'vendors'
    //             }
    //         }
    //     }
    // }
};