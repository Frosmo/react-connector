const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');

const { uglify } = require('rollup-plugin-uglify');

const CJSBuild = {
    input: './src/index.js',
    output: {
        file: './dist/index.min.js',
        sourcemap: true,
        format: 'cjs',
        compact: true,
    },
    plugins: [
        babel({
            exclude: './node_modules/**',
        }),
        resolve({
            customResolveOptions: {
                moduleDirectory: 'node_modules',
            },
        }),
        uglify(),
    ],
    external: ['react', 'prop-types'],
};

module.exports = CJSBuild;
