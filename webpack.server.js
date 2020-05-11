const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
    target: 'node',
    entry: './server/server.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {
                            target: { browsers: ['last 2 versions'] }
                        }]
                    ]
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: 'url-loader?limit=8192'
              }

        ]
    },
    externals: [webpackNodeExternals()]
}