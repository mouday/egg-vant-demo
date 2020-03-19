'use strict';

const Controller = require('egg').Controller;
const moment = require('moment');

class ArticleController extends Controller {
  async create() {
    const { ctx } = this;
    
    const data = {
      ...ctx.request.body,
      create_time: moment().format('YYYY-MM-DD HH:mm:ss')
    }

    const res = await ctx.service.article.create(data);
    if (res) {
      ctx.body = {
        status: 200,
        data: res,
      }
    } else {
      ctx.body = {
        status: 500,
        data: null,
        msg: '发布失败'
      }
    }
  }

  async list() {
    const { ctx } = this;
    
    const res = await ctx.service.article.list();
    if (res) {
      ctx.body = {
        status: 200,
        data: res,
      }
    } else {
      ctx.body = {
        status: 500,
        data: null,
        msg: '文章列表获取失败'
      }
    }

  }

  async detail() {
    const { ctx } = this;
    
    const res = await ctx.service.article.detail(ctx.params.id);

    if (res) {
      ctx.body = {
        status: 200,
        data: res,
      }
    } else {
      ctx.body = {
        status: 500,
        data: null,
        msg: '文章列表获取失败'
      }
    }
  }
}

module.exports = ArticleController;
