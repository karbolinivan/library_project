import css from "rollup-plugin-import-css";
import nodeResolve from "rollup-plugin-import-css";

export default {
  input: "src/app.js",
  output: {
    dir: "dist",
    format: "iife",
  },
  plugins: [
    css({
      output: "bundle.css",
    }),
    nodeResolve(),
  ],
};
