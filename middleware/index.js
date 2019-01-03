const compose = require('koa-compose');
const errorHandler = require('./error_handler.js');
const successHandler = require('./success_handler.js');

module.exports = () => compose([
  errorHandler(),
  successHandler(),
]);
