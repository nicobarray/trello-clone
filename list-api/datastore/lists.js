const logger = require('../lib/logger')

const create = async (name, db) => {
  logger.info({
    what: 'Create list in db from user request',
    name
  })

  const list = await new Promise((resolve, reject) =>
    db.insert({ name }, (err, doc) => {
      if (err) reject(err)
      resolve(doc)
    })
  )

  return list
}

const listAll = async db => {
  logger.info({
    what: 'List all list in db from user request'
  })

  const lists = await new Promise((resolve, reject) => {
    db.find({}, (err, docs) => {
      if (err) reject(err)
      resolve(docs)
    })
  })

  return lists
}

module.exports = { create, listAll }
