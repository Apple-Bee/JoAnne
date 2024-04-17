const path = require('path');

module.exports = {
  entry: './frontend/script.ts', // Adjust the entry point path as needed
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: path.resolve(__dirname, 'backend', 'tsconfig.json'), // Adjust the path to your tsconfig.json file
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
