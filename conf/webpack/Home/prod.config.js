const path = require('path');
const common = require('./common.config');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = merge( common, {
    mode: 'production',
    plugins: [],
    optimization: {
        minimize: false
    }
} );
