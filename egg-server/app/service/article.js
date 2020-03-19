'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
  async create(params) {
    const { app } = this;

    try {
      const result = await app.mysql.insert('article', params);
      return result;
    }
    catch (err) {
      console.log(err);
      return null;
    }
  }

  async list() {
    const { app } = this;
    
    try {
      // 查询所有数据
      const result = await app.mysql.select('article');
      return result;
    }
    catch (err) {
      console.log(err);
      return null;
    }
  }

  async detail(id) {
    const { app } = this;
    
    if(!id){
      console.log("id不能为空");
      return null;
    }

    try {
      // 查询数据
      const result = await app.mysql.get('article', {id});
      return result;
    }
    catch (err) {
      console.log(err);
      return null;
    }
  }
}

module.exports = ArticleService;
