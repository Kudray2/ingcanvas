export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    entry: string
    build: string
    htmlTemplate: string
}

export interface BuildEnv  {
    port: number
    mode: BuildMode
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    port: number
}