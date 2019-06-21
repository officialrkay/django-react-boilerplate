const path = require('path');
const common = require('./common.config');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = merge( common, {
    mode: 'development',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
    ],
    output: {
        publicPath: 'http://localhost:3000/assets/bundles/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),  // don't reload if there is an error
    ]
} );
