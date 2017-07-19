/**
 * Created by Любомир on 25.06.2017.
 */
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ["react-hot-loader", "babel-loader"]
            },
        ],
    },
};

