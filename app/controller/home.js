'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  * index() {
    const { ctx } = this;

    yield ctx.render('home.html', {});
  }
}

module.exports = HomeController;
