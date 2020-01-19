'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/it-support', controller.home.itSupport);
  router.get('/about', controller.home.aboutUs);
};
