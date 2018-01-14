const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const koaLogger = require('koa-logger')
const cors = require('@koa/cors')
const path = require('path')
const Datastore = require('nedb')

const logger = require('./lib/logger')
const routes = require('./routes')

const app = new koa()

const db = new Datastore({
  filename: path.join(__dirname, 'data/development.db'),
  autoload: true
})
app.context.db = db

app.use(koaLogger())
app.use(cors())
app.use(routes)
app.listen(8080)

console.log(
  JSON.stringify({
    meta: {
      who: 'list-api',
      when: Date.now(),
      level: 'info'
    },
    what: 'listening on port 8080'
  })
)
