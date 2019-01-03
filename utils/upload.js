const path = require('path');
const os = require('os');
const fs = require('fs');

/**
 * 同步创建文件目录
 * @param  {string} dirname 目录绝对地址
 * @return {boolean}        创建目录结果
 */
function mkdirSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  }
  if (mkdirSync(path.dirname(dirname))) {
    fs.mkdirSync(dirname);
    return true;
  }
}

/**
 * 获取上传文件的后缀名
 * @param  {string} fileName 获取上传文件的后缀名
 * @return {string}          文件后缀名
 */
function getSuffixName(fileName) {
  const nameList = fileName.split('.');
  return nameList[nameList.length - 1];
}

module.exports = {
  mkdirSync,
  getSuffixName,
};
