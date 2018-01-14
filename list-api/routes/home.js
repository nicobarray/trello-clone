const pkg = require('../package.json')

module.exports = {
  handler: ctx => {
    ctx.body = { version: pkg.version }
  }
}
