import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from '@rollup/plugin-terser';
import typescript from "@rollup/plugin-typescript";


const isProduction = process.env.NODE_ENV === 'production';

export default [
  {
    input: "src/index.ts",
    output: {
      file: 'dist/switcher-boiler-card.js',
      format: "es",
      inlineDynamicImports: true,
      sourcemap: !isProduction,
    },
    plugins: [
      typescript({
        declaration: false
      }),
      nodeResolve(),
      json(),
      commonjs(),
      terser()
    ]
  },
];