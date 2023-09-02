import path from 'path'
import webpack from 'webpack'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default env => {
  return {
    plugins: [
      new webpack.DefinePlugin({
        "process.env.ENV": JSON.stringify(process.env.NODE_ENV),
        "process.env.GOOGLE_API_KEY": JSON.stringify(process.env.GOOGLE_API_KEY),
        "process.env.GIT_HASH": JSON.stringify(process.env.GIT_HASH),
        "process.env.VERSION": JSON.stringify(process.env.VERSION)
      })
    ],
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist/public/js'),
    },
    node: {
      global: true,
      __filename: true,
      __dirname: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
}
