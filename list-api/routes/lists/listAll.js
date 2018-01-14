const { Joi } = require('koa-joi-router')

const lists = require('../../datastore/lists')

module.exports = {
  validate: {
    output: {
      200: {
        body: {
          ok: Joi.number()
        }
      }
    }
  },
  handler: async ctx => {
    ctx.body = await lists.listAll(ctx.db.lists)
  }
}
