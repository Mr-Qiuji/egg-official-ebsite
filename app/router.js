'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/it-support', controller.home.itSupport);
  router.get('/about', controller.home.aboutUs);

  router.get('/it-support/managed-services', controller.home.managedServices);
  router.get('/it-support/residential-support', controller.home.residentialSupport);
  router.get('/it-support/desktop-user-support', controller.home.desktopUserSupport);
};
