/**
 *
 * first load middlewares
 */
const { app, express } = require("../../app");

const { appMiddlewares } = require("../../../config/middlewares");

/**
 *
 * load Default middlewares
 */
let defaultMiddlewares = [];

const middlewares = {};
middlewares.loadDefaults = () => {
  let appMid = appMiddlewares.map((midwr) => {
    if (express.hasOwnProperty(midwr)) return express[midwr]();
  });
  if (appMid.length > 0)
    app.use([...new Set([...defaultMiddlewares, ...appMid])]);
};

// Export middlewares
exports.middlewares = middlewares;
