const { Joi } = require('koa-joi-router')

const items = require('../../datastore/items')

module.exports = {
  validate: {
    query: {
      listId: Joi.string()
    },
    output: {
      200: {
        body: {
          listItems: Joi.array()
        }
      }
    }
  },
  handler: async ctx => {
    const listId = ctx.url.substr(1).split('/')[1]
    const listItems = await items.listItemsOfList(listId, ctx.db.items)
    ctx.body = {
      listItems
    }
  }
}
