import * as webpack from 'webpack';
import * as path from 'path';
import * as fs from 'fs';
import * as angularExternals from 'webpack-angular-externals';
import * as rxjsExternals from 'webpack-rxjs-externals';

const pkg = JSON.parse(fs.readFileSync('./package.json').toString());

export default {
  entry: {
    'index.umd': './src/index.ts',
    'index.umd.min': './src/index.ts',
    'tilt.theme': './src/style/cppib.theme.scss'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].dist.js',
    libraryTarget: 'umd',
    library: 'ngx-tilt-common'
  },
  resolve: {
    extensions: [ '.ts', '.js', '.json' ]
  },
  externals: [
    angularExternals(),
    rxjsExternals()
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: 'tsconfig.json'
            }
          },
          {
            loader: 'angular2-template-loader'
          }
        ],
        exclude: [
          /node_modules/,
          /\.(spec|e2e)\.ts$/
        ]
      },

      {
        test: /\.json$/,
        use: 'json-loader'
      },

      {
        test: /\.(css|scss)$/,
        use: ['to-string-loader', 'css-loader', 'sass-loader'],
        exclude: [path.resolve(__dirname, 'src', 'style')]
      },

      {
        test: /\.html$/,
        use: 'raw-loader'
      },

      {
        test: /\.(css|scss)$/,
        loaders: [
            {
                loader: "file-loader",
                options: {
                  name: "[name].dist.css",
              },
            },
            {
                loader: "extract-loader",
            },
            {
                loader: "css-loader",
            },
            {
              loader: "sass-loader",
            }
        ],
        include: [path.resolve(__dirname, 'src', 'style')]
    },
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.join(__dirname, 'src')
    ),

    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      sourceMap: true
    }),

    new webpack.BannerPlugin({
      banner: `
/**
 * ${pkg.name} - ${pkg.description}
 * @version v${pkg.version}
 * @author ${pkg.author.name}
 * @link ${pkg.homepage}
 * @license ${pkg.license}
 */
      `.trim(),
      raw: true,
      entryOnly: true
    })

  ]
} as webpack.Configuration;
