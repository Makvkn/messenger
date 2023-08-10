const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        hot: true, //For Refresh capability, also known as Hot Module Replacement (HMR)
        open: true,
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('React'),
        }),
        new ReactRefreshWebpackPlugin(), //For Refresh capability, also known as Hot Module Replacement (HMR)
    ],
};
