var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	//entry: {
	//	index1: './index.js',
	//	index2: ['./c.js', './d.js']
	//},
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './index.js'
    ],

    //entry: {
    //    main: './main',
    //    //chunk: ['./chunk1','./chunk2']
    //    main1: './main1',
    //    common1: ['jquery'],
    //    common2: ['lodash']
    //},

	output: {
		path: path.resolve(__dirname, 'assets'),
        //publicPath: '/assets/',
		filename: 'index.bundle.js'
	},

    module: {
        loaders: [
            {
                test: /\.s[c|a]ss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                loader: 'webpack-module-hot-accept'
            }
        ]
    },

    resolve: {
        alias: {
            a: path.resolve(__dirname, 'js/a.js')
        }
    },



	plugins: [
		//new webpack.optimize.CommonsChunkPlugin({
		//	names: 'common1',
         //   filename: 'vendor.[hash].js',
         //   chunks: ['main', 'main1']
         //   //minChunks: 3
		//	//filename: 'vender.[hash].js'
		//})
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './template.html'
        }),
        new webpack.ProvidePlugin({
            jquery: 'jquery',
            $: 'jquery'
        })
    ],

    externals: {
        //jquery: 'jQuery'
    },

    devServer: {
        contentBase: './js'
        //inline: true,
        //hot: true
    }
};
