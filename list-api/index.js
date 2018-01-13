const koa = require('koa')
const route = require('koa-route')
const logger = require('koa-logger')
const cors = require('@koa/cors')

const home = require('./routes/home')

const app = new koa()

app.use(logger())
app.use(cors())

app.use(route.get('/', home))

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
