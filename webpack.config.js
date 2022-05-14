const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        libraryTarget: 'umd',
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
