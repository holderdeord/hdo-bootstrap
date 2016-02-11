var path = require('path');
var fs = require('fs');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    entry: path.join(__dirname, 'index.js'),

    output: {
        path: path.join(__dirname, '/public'),
        filename: 'hdo-bootstrap.js'
    },

    resolve: {
        root: __dirname,
        modulesDirectories: [ 'node_modules' ]
    },

    module: {
        loaders: [
            {
               test: /\.scss$/,
               loader: ExtractTextPlugin.extract('style-loader', 'css!postcss!sass')
            },

            {
                test: /\.(jpe?g|png|gif|svg|topojson|geojson)$/,
                loader: 'url'
            },
        ],
    },

    postcss: function() {
        return [autoprefixer, precss];
    },

    plugins: [
        new ExtractTextPlugin("hdo-bootstrap.css")
    ]
};
