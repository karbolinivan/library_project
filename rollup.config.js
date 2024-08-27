import css from "rollup-plugin-import-css";
import nodeResolve from "rollup-plugin-import-css";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/app.js",
  output: {
    dir: "dist",
    format: "iife",
    name: "App",
  },
  plugins: [
    css({
      output: "bundle.css",
    }),
    nodeResolve(),
    commonjs(),
  ],
};
