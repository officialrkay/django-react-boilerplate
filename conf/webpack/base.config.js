const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const _ = require('lodash')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = layout => ({
    entry: [
        path.join(__dirname, `../../layout/${_.upperFirst(_.camelCase(layout))}/index.jsx`),
    ],
    output: {
        path: path.resolve('./assets/bundles/'),
        filename: `${_.toLower(layout)}/main-[hash].js`
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
                test: /\.(css|scss|sass)$/,
                loaders: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader?sourceMap',
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: __dirname
                            }
                        }
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(woff(2)?|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
                loader: `file-loader?name=${_.toLower(layout)}/fonts/[name].[ext]`,
            },
            {
                test: /\.(svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=100000',
            },
            {
                test: /\.(jpg|png)?$/,
                loaders: [
                    `file-loader?name=${_.toLower(layout)}/images/[name].[ext]`,
                ],
            },
        ]
    },
    plugins: [
        new BundleTracker({
            filename: `./webpack-stats-${_.toLower(layout)}.json`
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: `${_.toLower(layout)}/main-[hash].css`, disable: false, allChunks: true }),
    ],
    resolve: {
        modules: ['node_modules', 'bower_components'],
        extensions: ['.js', '.jsx']
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ],
    }
})
