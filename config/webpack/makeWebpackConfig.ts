import {BuildOptions} from "./types/webpackConfig";
import {makePlugins} from "./makePlugins";
import {makeResolvers} from "./makeResolvers";
import {makeLoaders} from "./makeLoaders";
import {makeDevServer} from "./makeDevServer";

export function makeWebpackConfig(options: BuildOptions) {
    const {mode,paths, port} = options
    return {
        mode: mode,
        entry: paths.entry,
        module: {
            rules: makeLoaders(mode)
        },
        resolve: makeResolvers(),
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: makePlugins(paths),
        devtool: mode=== 'development' ?'inline-source-map' : undefined,
        devServer: makeDevServer(port)
    }

}