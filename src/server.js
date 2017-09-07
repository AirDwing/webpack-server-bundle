const Koa = require('koa');
const logger = require('koa-api-logger');
const { enabledModules } = require('../config');

const app = new Koa();

logger() |> app.use;

enabledModules.forEach((mod) => {
  /* eslint-disable global-require,import/no-dynamic-require */
  const routes = require(`./${mod}/route`);
  routes.middleware() |> app.use;
});

module.exports = app;
