const head = require('lodash/head')

const logger = require('../lib/logger')

const create = async (listId, description, db) => {
  logger.info({
    what: 'Add new list item in db from user request'
  })

  const listItem = await new Promise((resolve, reject) =>
    db.insert({ listId, description }, (err, doc) => {
      if (err) reject(err)
      resolve(doc)
    })
  )

  return listItem
}

const listItemsOfList = async (listId, db) => {
  logger.info({
    what: 'List all list in db from user request'
  })

  const listItems = await new Promise((resolve, reject) => {
    db.find({ listId }, (err, docs) => {
      if (err) reject(err)
      resolve(docs)
    })
  })

  return listItems
}

module.exports = {
  create,
  listItemsOfList
}
