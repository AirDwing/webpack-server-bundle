// eslint-disable-next-line import/no-dynamic-require
const options = require(`./_${process.env.API_ENV || 'development'}`);

module.exports = options;
