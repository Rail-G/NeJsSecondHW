const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js', // Точка входа
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundleResult.js'
    }, // Куда и по какому имени будет загружаться
    devServer: {
        static: {
          directory: path.resolve(__dirname, "dist")
        },
        open: {
          target: ["result.html"],
        }
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
              },
            ],
          }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'TestApp',
            filename: './result.html'
        }),
        new MiniCssExtractPlugin()
    ] // Плагины(создание, больше действий, чем с загрузчиками)
}