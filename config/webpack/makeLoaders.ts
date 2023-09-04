import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/webpackConfig";

export function makeLoaders(mode: BuildOptions["mode"]) {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };
    const styleLoader = {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
    };

    return [typescriptLoader, styleLoader];
}
