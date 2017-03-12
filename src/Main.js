import 'babel-polyfill'
import {blog} from './Blog'
import bodyParser from 'koa-bodyparser'
import chalk from 'chalk'
import cors from 'kcors'
import Koa from 'koa'
import koaRouter from 'koa-router'
import logger from 'koa-logger'

const app = new Koa()

// Include some useful middleware
app.use(logger())
app.use(bodyParser())
app.use(cors())

const router = koaRouter()

router.get('/', async ctx => { ctx.body = 'ok' })

router.get('/blog', blog)

// Use the defined routes
app.use(router.routes())
app.use(router.allowedMethods())

// Start up the server on the given port
const port = process.env.PORT || 4000
app.listen(port)

// Report success!
console.log(`${chalk.blue('feed-beagle')} is listening on port ${chalk.green(port)}...`)
