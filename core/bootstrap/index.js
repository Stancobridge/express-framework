/**
 * 
 * Import server
 * 
 */
const Server = require('../server');
const routes = require("../src/router/routes")

const bootstrap = {}
bootstrap.bootApp = () => {
  Server.start();
  Server.loadMiddlewares()
  routes.loadRoutes()
}

module.exports = bootstrap