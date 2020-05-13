const app = require("./app")

class Server {
  // start the servers
  static start() {
    // Listen to a port
    app.get('/', (req, resp) => {
      resp.send('You are in Home')
    })
    app.listen(3000)
  }

  static setMiddlewares() {}
}


module.exports= Server;