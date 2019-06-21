const path = require('path');
const common = require('./common.config');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = merge.smart( common, {
    mode: 'production',
    optimization: {
        minimize: true
    }
} );
