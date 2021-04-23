const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../build/webpack.dev');

const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer);
const server = new WebpackDevServer(compiler, devServerOptions);

// 开放3000-8000的随机端口
const port = 3000 + Math.floor(Math.random()*(8000-3000));
server.listen(port, '127.0.0.1', () => {
  console.log(`服务已开启：http://localhost:${port}`);
});
