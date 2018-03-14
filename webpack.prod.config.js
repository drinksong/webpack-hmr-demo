/**
 * Created by songjunke on 2017/7/7.
 */
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    //entry: {
    //    index: './index.js',
    //    babelPolyfill: 'babel-polyfill'
    //},
    entry: [
        './index.js',
        'babel-polyfill'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.s[c|a]ss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
            //{
            //    test: /\.js$/,
            //    loader: 'webpack-module-hot-accept'
            //}
        ]
    },
    resolve: {
        alias: {
            a: path.resolve(__dirname, 'js/a.js')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            jquery: 'jquery',
            $: 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: './template.html'
        })
        //new FaviconsWebpackPlugin({
        //    logo: './my-logo.png'
        //})
    ],
    externals: {
        //jquery: 'jQuery'
    }
};