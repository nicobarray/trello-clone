const create = require('./create')
const listAll = require('./listAll')

module.exports = [
  {
    method: 'put',
    path: '/lists',
    validate: create.validate,
    handler: create.handler
  },
  {
    method: 'get',
    path: '/lists',
    handler: listAll.handler
  }
]
