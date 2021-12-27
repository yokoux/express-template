import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import ts from '@rollup/plugin-typescript'

export default {
    input: 'src/index.ts',
    output: [
        {
            dir: 'lib',
            format: 'cjs'
        },
        {
            file: './lib/index.es.js',
            format: 'es'
        },
        {
            file: './lib/index.umd.js',
            format: 'umd'
        },
    ],
    plugins: [
        resolve(),
        json(),
        commonjs(),
        ts()
    ]
}