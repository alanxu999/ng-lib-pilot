const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const config = {
  devtool: 'source-map',
  entry: {
    "normalize.css": path.resolve(__dirname, 'normalize.css'),
    "tilt.theme": path.resolve(__dirname, 'lib', 'cppib.theme.dist.css'),
    polyfills: path.resolve(__dirname, 'src', 'polyfills.browser.ts'),
    main: path.resolve(__dirname, 'src', 'main-jit.ts')
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'jit'),
    filename: '[name].dist.js'
  },
  module: {
    rules: [
    {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
      include: [path.resolve(__dirname, 'lib'), path.resolve(__dirname, 'normalize.css')]
    },
    {
      test: /\.ts$/,
      use: [
        {
          loader: 'awesome-typescript-loader',
          options: {
            configFileName: path.resolve(__dirname, 'tsconfig.json')
          }
        }, 
        {
          loader: 'angular2-template-loader'
        }
      ]
    }, 
      /* Embed files. */
    { 
      test: /\.(html|css)$/, 
      loader: 'raw-loader',
      exclude: [/\.async\.(html|css)$/, path.resolve(__dirname, 'lib'), path.resolve(__dirname, 'normalize.css')]
    },
    /* Async loading. */
    {
      test: /\.async\.(html|css)$/, 
      loaders: ['file?name=[name].[hash].[ext]', 'extract'],
      exclude: [path.resolve(__dirname, 'lib'), path.resolve(__dirname, 'normalize.css')]
    }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),

    /*
     * Plugin: HtmlWebpackPlugin
     * Description: Simplifies creation of HTML files to serve your webpack bundles.
     * This is especially useful for webpack bundles that include a hash in the filename
     * which changes every compilation.
     *
     * See: https://github.com/ampedandwired/html-webpack-plugin
     */
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.ejs'),
      title: 'Angular Library Starter',
      inject: 'body'
    }),

    /**
     * Plugin: ContextReplacementPlugin
     * Description: Provides context to Angular's use of System.import
     *
     * @see: https://github.com/angular/angular/issues/11580
     */
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, 'src'),
      {}
    ),

    /*
     * Plugin: CommonsChunkPlugin
     * Description: Shares common code between the pages.
     * It identifies common modules and put them into a commons chunk.
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
     * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
     */
    new CommonsChunkPlugin({
      name: 'polyfills',
      chunks: ['polyfills']
    }),

    // This enables tree shaking of the vendor modules
    new CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['main'],
      minChunks: module => /node_modules/.test(module.resource)
    }),

    // Specify the correct order the scripts will be injected in
    new CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),
  ],

  devServer: {
    port: 8000,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
};

module.exports = config;
