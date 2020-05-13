const {app} = require("./app")
const {middlewares} = require("./src/middlewares")
class Server {
  // start the servers
  static start() {
    // Listen to a port
    app.listen(3000)
  }

  static loadMiddlewares() {
    middlewares.loadDefaults()
  }
}


module.exports= Server;