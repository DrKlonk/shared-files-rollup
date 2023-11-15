
import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';


export default defineConfig({
    input: ['src/index.ts', '../shared/constants.ts'],
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: process.env['NODE_ENV'] !== 'prd'
    },
    plugins: [
      nodeResolve({ preferBuiltins: true }),
      typescript({
        include: ['./**/*.ts', '../shared/*.ts']
      }),
    ],
  });