import { makeWebpackConfig } from "./config/webpack/makeWebpackConfig";
import {
  BuildEnv,
  BuildMode,
  BuildPaths,
} from "./config/webpack/types/webpackConfig";
import path from "path";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    htmlTemplate: path.resolve(__dirname, "index.html"),
    build: path.resolve(__dirname, "build"),
  };
  const mode: BuildMode = env.mode || "development";
  const port = env.port || 3000;

  return makeWebpackConfig({ paths, mode, port });
};
