const router = require('koa-joi-router')
const Joi = router.Joi

const logger = require('../../lib/logger')
const items = require('../../datastore/items')

module.exports = {
  handler: async ctx => {
    const listItem = await items.create(
      ctx.request.body.listId,
      ctx.request.body.description,
      ctx.db.items
    )
    ctx.status = 201
    ctx.body = listItem
  },
  validate: {
    body: {
      description: Joi.string(),
      listId: Joi.string()
    },
    type: 'json',
    output: {
      200: {
        body: {
          _id: Joi.string(),
          description: Joi.string(),
          listId: Joi.string()
        }
      }
    }
  }
}
