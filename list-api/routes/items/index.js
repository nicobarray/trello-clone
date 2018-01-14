const create = require('./create')
const listItemsOfList = require('./listItemsOfList')

module.exports = [
  {
    method: 'put',
    path: '/items',
    validate: create.validate,
    handler: create.handler
  },
  {
    method: 'get',
    path: '/items/:listId',
    validate: listItemsOfList.validate,
    handler: listItemsOfList.handler
  }
]
