var webpack = require('webpack');

module.exports = {
    entry: './src/clean-html.js',
    output: {
        path: './dist',
        filename: 'clean-html.js',
        library: 'CleanHTML',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    loaders: [{
        test: /\.css$/,
        loaders: [
            'style',
            'css',
            'postcss'
        ]
    }, {
        test: /\.less$/,
        loaders: [
            'style',
            'css',
            'less'
        ]
    }],
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}
