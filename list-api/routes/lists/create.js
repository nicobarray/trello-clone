const router = require('koa-joi-router')
const Joi = router.Joi

const logger = require('../../lib/logger')
const lists = require('../../datastore/lists')

module.exports = {
  handler: async ctx => {
    const list = await lists.create(ctx.request.body.name, ctx.db)
    ctx.status = 201
    ctx.body = list
  },
  validate: {
    body: {
      name: Joi.string().max(100)
    },
    type: 'json',
    output: {
      200: {
        body: {
          _id: Joi.string(),
          name: Joi.string()
        }
      }
    }
  }
}
