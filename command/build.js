const Webpack = require('webpack');
const webpackConfig = require('../build/webpack.prod');

const compiler = Webpack(webpackConfig);

compiler.watch({
    aggregateTimeout:300,
    poll: 1000,
    ignored: /node_modules/
}, (err, stats) => {
    if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
        }
        return;
    }
    
    const info = stats.toJson();
    if (stats.hasErrors()) {
        console.error(info.errors);
    }
})