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

  * managedServices() {
    const { ctx } = this;

    yield ctx.render('managed-services.html', {});
  }

  * residentialSupport() {
    const { ctx } = this;

    yield ctx.render('residential-support.html', {});
  }

  * desktopUserSupport() {
    const { ctx } = this;

    yield ctx.render('desktop-user-support.html', {});
  }
}

module.exports = HomeController;
