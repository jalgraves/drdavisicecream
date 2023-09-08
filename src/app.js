import HttpError from 'http-errors'
import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import morgan from 'morgan'
// import * as sassMiddleware from 'node-sass-middleware'
import { fileURLToPath } from 'url'
import * as indexRouter from './routes/index.js'
import * as usersRouter from './routes/users.js'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// new shit
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const logLevel = process.env.LOG_LEVEL || 'dev'

if (process.env.NODE_ENV === "development") {
  app.use(morgan('dev'))
} else {
  app.use(morgan(logLevel, {
    skip: function (req, res) { return res.statusCode < 400 }
  }))
}
// end new shit

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(sassMiddleware({
//   src: path.join(__dirname, '../dist/public'),
//   dest: path.join(__dirname, '../dist/public'),
//   indentedSyntax: true, // true = .sass and false = .scss
//   sourceMap: false
// }))

app.use(express.static(path.join(__dirname, '../dist/public')))
// app.use(express.static(staticUrl))

const urlRoot = process.env.NODE_JAL_URL_ROOT || '/'

app.use(urlRoot, indexRouter.default)
app.use(urlRoot + '/users', usersRouter.default)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(HttpError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  console.log(err.message)
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export default app
