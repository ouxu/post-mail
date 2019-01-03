/**
 * Created by out_xu on 17/7/2.
 */
const path = require('path');
const convert = require('koa-convert');
const cors = require('kcors');
const logger = require('koa-logger');
const views = require('koa-views')
const parameter = require('koa-parameter');
const koaBody = require('koa-body');
const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');

module.exports = (app) => {
  app.use(convert(logger()));
  app.use(convert(cors({ credentials: true })));
  app.use(koaStatic(path.join(__dirname, '../public')));
  app.use(views(path.join(__dirname, '../view'), {
    extension: 'ejs'
  }));
  app.use(koaBody({ multipart: true }));
  app.use(bodyParser());
  app.use(convert(parameter(app)));
};
