const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('[name].css');

module.exports = {
    mode: process.env.NODE_ENV,
    context: path.resolve(__dirname, 'src'),
    entry: {
        WB00278501: './js/WB00278501.js',
        WB00278501_research: './js/WB00278501_research.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/i,
                use: extractCSS.extract(['css-loader', 'postcss-loader', 'sass-loader']),
            },
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'pug-loader',
                        options: {
                            pretty: true
                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    },
                ],
            }
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'initial',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        extractCSS,
        new CopyWebpackPlugin([
            { from: 'assets', to: 'assets' },
            { from: 'public', to: 'public' },
            { from: 'images', to: 'images' },
            { from: 'components', to: 'components' },
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: './pug/partial/WB00278501.pug',
            filename: './WB00278501.html',
            chunks: ['vendor', 'WB00278501']
        }),
        new HtmlWebpackPlugin({
            template: './pug/partial/WB00278501_research.pug',
            filename: './WB00278501_research.html',
            chunks: ['vendor', 'WB00278501_research']
        }),
    ]
};