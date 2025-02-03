const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Matches .css files
        use: [
          process.env.NODE_ENV === 'development'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader, // Use style-loader in development, MiniCssExtractPlugin in production
          'css-loader',
        ],
      },
      {
        test: /\.js$/, // Handle JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Transpile modern JavaScript
          },
        },
      },
      {
        test: /\.tsx?$/, // Handle TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/, // Exclude node_modules to improve build performance
      },
      // Audio handling
      {
        test: /\.(mp3|wav|ogg)$/i,
        type: 'asset/resource', // Webpack 5's built-in asset handling
        generator: {
          filename: 'assets/[name][ext]', // Control the output location for assets
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css', // Define output for extracted CSS files
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'public'), // Serve static files from the 'public' folder
    open: true,
    port: 8080,
    hot: true,
    liveReload: true,
  },
  mode: 'development', // or 'production' depending on your environment
};