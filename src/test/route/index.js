const router = require('koa-joi-router');
const test = require('./test');

const routes = router();
routes.prefix('/test');
routes.route(test);
module.exports = routes;
