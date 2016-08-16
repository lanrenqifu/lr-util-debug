/**
 * @file 输出ui日志模块
 */

'use strict';

var chalk = require('chalk');

var debug = {
  /**
   * @desc warn
   * @param msg
   * @returns {*}
   */
  warn: function(msg) {
    if(msg == undefined || msg == null || msg == '')  return null;
    return console.log(chalk.yellow.bold('警告：' + chalk.underline.gray(msg)));
  },
  /**
   * @desc error
   * @param msg
   * @returns {*}
   */
  error: function(msg) {
    if(msg == undefined || msg == null || msg == '')  return null;
    return console.log(chalk.red.bold('错误：' + chalk.blue.underline(msg)));
  },

  /**
   * @desc log
   * @param label
   * @param msg
   */
  log: function(label, msg) {
    if(arguments.length == 1) {
      msg = label;
      label = '';
    }
    label = (!label) ? '' : label + '：';
    return console.log(chalk.bold.cyan(label) + chalk.white(msg));
  }
}

module.exports = debug;