const rds = require('ali-rds');
const config = require('../config');

module.exports = rds(config.mysql);
