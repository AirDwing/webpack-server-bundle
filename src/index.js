const { server: serverOptions } = require('../config');
const app = require('./server');

app.listen(serverOptions);
console.log(new Date());
