import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import {BuildPaths} from "./types/webpackConfig";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function makePlugins (paths: BuildPaths)  {
    return [
        new HTMLWebpackPlugin({template: paths.htmlTemplate}),
        new webpack.ProgressPlugin(), // что-то непонятное. Плагин работает штатно IDE ругается.
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:6].css',
            chunkFilename: 'css/[name].[contenthash:6].css'
        })
    ]

}