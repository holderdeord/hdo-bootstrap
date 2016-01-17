var path = require('path');
var fs = require('fs');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
               loader: ExtractTextPlugin.extract('style-loader', 'css!autoprefixer!sass')
            },

            {
                test: /\.(jpe?g|png|gif|svg|topojson|geojson)$/,
                loader: 'url'
            },
        ]
    },

    plugins: [
        new ExtractTextPlugin("hdo-bootstrap.css")
    ]
};
