const xlsx = require('node-xlsx');
const mail = require('../utils/mail');

class IndexController {
  static async index(ctx) {
    const title = 'hello koa2';
    await ctx.render('index', {
      title,
      content: '',
      excel: '',
    });
  }

  static async send(ctx) {
    const targetXlsx = ctx.request.files && ctx.request.files.file;
    let attachments = ctx.request.files && ctx.request.files.attachments;
    if (!Array.isArray(attachments)) {
      attachments = [attachments];
    }

    const fileData = xlsx.parse(targetXlsx.path);
    const params = ctx.request.body;

    const res = await mail({
      ...params,
      attachments: attachments.map(e => ({ ...e, filename: e.name })),
      name: {
        name: params.name,
        address: params.user,
      },
    });

    ctx.body = {
      res,
      params,
      excel: fileData,
    };
  }
}

module.exports = IndexController;
