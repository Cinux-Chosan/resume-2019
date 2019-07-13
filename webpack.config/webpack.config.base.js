const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SetReduxPlugin = require('./plugins/set-redux')
const rootDir = path.resolve(__dirname, '..')

module.exports = {
    entry: path.resolve(rootDir, './src/index.js'),
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(rootDir, 'dist')
    },

    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(rootDir, 'src/index.html')
        }),
        new SetReduxPlugin()
    ],

    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            "@components": path.join(rootDir, "./src/components/"),
            "@pages": path.join(rootDir, './src/pages'),
            "@public": path.join(rootDir, './src/public'),
        },
        modules: [path.resolve(rootDir, 'node_modules'), 'node_modules']
    },

    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                // include: [path.resolve(rootDir, 'src')],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            [
                                'import', {
                                    libraryName: 'antd',
                                    libraryDirectory: 'es',
                                    style: 'css',
                                }
                            ],
                            'syntax-dynamic-import',
                            "@babel/plugin-proposal-class-properties"
                        ],
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    modules: false
                                }
                            ],
                            "@babel/preset-react",
                        ]
                    }
                }, {
                    loader: path.resolve(__dirname, './loaders/redux.js'),
                    options: {
                        // root reducer path
                        rootReducerPath: path.resolve(process.cwd(), 'src/redux/reducers.js'),
                        // root saga path
                        rootSagaPath: path.resolve(process.cwd(), 'src/redux/sagas.js'),
                    }
                }]
            }, {
                test: /.(css|less)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'style-loader', // creates style nodes from JS strings
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: '__[local]_[hash:base64:5]',
                        },
                    }
                }, {
                    loader: 'less-loader', // compiles Less to CSS
                },]
            }, {
                test: /\.(css|less)$/,
                include: /node_modules/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(csv|tsv)$/,
                use: ["csv-loader"]
            },
            {
                test: /\.xml$/,
                use: ["xml-loader"]
            }
        ]
    },
};

