/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // 关闭scrf
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // 配置模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  // 配置数据库
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'aBc@123456',
      // 数据库名
      database: 'data',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };


  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1570720226826_6549';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
