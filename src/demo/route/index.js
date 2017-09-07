const router = require('koa-joi-router');
const test = require('./test');

const routes = router();
routes.prefix('/demo');
routes.route(test);
module.exports = routes;
