
export function makeDevServer (port: number) {
    return {
        port: port,
        open: false,
        historyApiFallback: true
    }
}