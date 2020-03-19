'use strict';

const Service = require('egg').Service;

class productService extends Service {
  async index() {
      return {
          name: "Tom",
          age: 18
      };
  }
}

module.exports = productService;
