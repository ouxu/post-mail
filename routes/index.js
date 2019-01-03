const indexRouter = require('koa-router')();
const indexController = require('../controller/index');

indexRouter.get('/', indexController.index);
indexRouter.post('/', indexController.send);

module.exports = [
  indexRouter
];
