const nodemailer = require('nodemailer');

const mail = options => new Promise((resolve, reject) => {
  const transporter = nodemailer.createTransport({
    service: options.service || '',
    auth: {
      user: options.user,
      pass: options.pass,
    },
  });

  const mailOptions = {
    from: options.name, // 发送者
    to: options.email, // 接受者,可以同时发送多个,以逗号隔开
    subject: options.subject, // 标题
    html: options.content,
    attachments: options.attachments,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      reject(err);
    }
    resolve(info);
  });
});

module.exports = mail;
