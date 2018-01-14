const router = require('koa-joi-router')

const home = require('./home')
const lists = require('./lists')
const items = require('./items')

const routes = router()

routes.route([
  {
    method: 'get',
    path: '/',
    handler: home.handler
  },
  ...lists,
  ...items
])

module.exports = routes.middleware()
