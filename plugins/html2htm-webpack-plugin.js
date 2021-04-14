const fs = require('fs');
const path = require('path');
function htmlTohtmWebpackPlugin(options) {}

htmlTohtmWebpackPlugin.prototype.apply = function (compiler) {
    compiler.plugin("emit", function (compilation, callback) {
        const htmlCode = compilation.assets['index.html'].source();
        compilation.assets['index.htm'] = {
            source: function () {
                return htmlCode;
            },
            size: function () {
                return Buffer.byteLength(htmlCode, 'utf8');
            }
        }
        callback();
    });
    compiler.plugin('done', (stats) => {
        const indexPath = path.join(stats.compilation.compiler.outputPath, 'index.html');
        fs.stat(indexPath, (err, stats) => {
            if (err) throw err;
            if(stats.isFile()){
                fs.unlinkSync(indexPath);
            }
        });
    });
};

module.exports = htmlTohtmWebpackPlugin;