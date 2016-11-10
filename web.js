/* @flow */

let keystone = require('keystone');

keystone.init({
  'name': 'nvision 2017',

  'auto update': true,
  'mongo': 'mongodb://localhost/nvision2017v0',

  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': 'This is a Huuge Secret'
});


require('./models');

keystone.set('routes', require('./routes'))

keystone.start();
