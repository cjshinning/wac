const path = require('path');
const settings = require('../config/settings');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const glob = require("glob");
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

function createSpritesmithPlugin() {
    const spritesmithPluginResult = [
        // 默认的雪碧图
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(settings.basePath,'src',settings.appId, 'src/assets/ico'),
                glob: '*.png'
            },
            target: {
                image: path.resolve(settings.basePath,'src',settings.appId, 'src/assets/img/sprite.png'),
                css: path.resolve(settings.basePath,'src',settings.appId, 'src/assets/css/sprite.scss')
            },
            apiOptions: {
                cssImageRef: process.env.NODE_ENV === 'development' ? '/src/assets/img/sprite.png' : '../img/sprite.png'
            },
            spritesmithOptions: {
                padding: 10,
                algorithm: "binary-tree"
            }
        })
    ];
    const componentDir = path.resolve(settings.basePath,'src',settings.appId, 'src/components');
    const componentIconDirs = glob.sync(componentDir + '/**/ico');
    componentIconDirs.forEach(componentIconDir => {
        const componentName = componentIconDir.match(/components\/(.*)\//)[1].replace(/-/g, '_');
        // 每个组件里面的雪碧图
        spritesmithPluginResult.push(
            new SpritesmithPlugin({
                src: {
                    cwd: componentIconDir,
                    glob: '*.png'
                },
                target: {
                    image: componentIconDir.match(/(\/.*\/)ico/)[1] + 'img/sprite_' + componentName + '.png',
                    css: componentIconDir.match(/(\/.*\/)ico/)[1] + 'css/sprite.scss',
                },
                apiOptions: {
                    cssImageRef: './img/sprite_' + componentName + '.png'
                },
                spritesmithOptions: {
                    padding: 10,
                    algorithm: "binary-tree"
                }
            })
        )
    })
    return spritesmithPluginResult;
}

module.exports = {
    entry: {
        app: path.resolve(settings.basePath,'src',settings.appId,'src/main.js')
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
                    loader:  'babel-loader',
                    options: {
                        presets: [['@babel/preset-env']],
                        cacheDirectory:true 
                    }
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
        ...createSpritesmithPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(settings.basePath,'src',settings.appId,'index.html')
        }), 
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    performance: false,
    optimization: {
        splitChunks: {
          cacheGroups: {
            default: {
                name: 'common',
                chunks: 'initial',
                minChunks: 2,
                priority: -20
            },
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'initial',
                priority: -10
            }
          },
        },
      },
};