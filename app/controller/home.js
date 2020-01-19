'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  * index() {
    const { ctx } = this;

    yield ctx.render('home.html', {});
  }

  * itSupport() {
    const { ctx } = this;

    yield ctx.render('it-support.html', {});
  }

  * aboutUs() {
    const { ctx } = this;

    yield ctx.render('about.html', {});
  }
}

module.exports = HomeController;
