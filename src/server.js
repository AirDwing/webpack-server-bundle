import Koa from 'koa';
import logger from 'koa-api-logger';
import { enabledModules } from '../config';

const app = new Koa();

logger() |> app.use;

enabledModules.forEach((mod) => {
  /* eslint-disable global-require,import/no-dynamic-require */
  const routes = require(`./${mod}/route`);
  routes.middleware() |> app.use;
});

export default app;
