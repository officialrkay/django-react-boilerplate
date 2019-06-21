const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const _ = require('lodash')

module.exports = layout => ({
    entry: [
        path.join(__dirname, `../../layout/${_.upperFirst(_.camelCase(layout))}/index.jsx`),
    ],
    output: {
        path: path.resolve('./assets/bundles/'),
        filename: `${_.toLower(layout)}/[hash].js`
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new BundleTracker({
            filename: `./webpack-stats-${_.toLower(layout)}.json`
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        modules: ['node_modules', 'bower_components'],
        extensions: ['.js', '.jsx']
    },
})
