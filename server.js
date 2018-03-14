/**
 * Created by songjunke on 2017/7/4.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config.js');
var complier = webpack(config);

var server = new WebpackDevServer(complier, {
    //publicPath: '/assets/',
    hot: true,
    compress: true,
    stats: {
        color: true
    }
});

server.listen(8080, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost: 8080');
});