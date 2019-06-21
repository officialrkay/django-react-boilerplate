const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('../base.config');

module.exports = merge( baseConfig( 'blog' ), {
    // Common Weback Config Here
} );
