const helmet = require('helmet')
const thirdPartymiddlewares = {
  helmet,
}

const appMiddlewares = ['json']

const costumMiddlewares = {

}

exports.appMiddlewares = appMiddlewares
exports.costumMiddlewares = costumMiddlewares
exports.thirdPartymiddlewares = thirdPartymiddlewares