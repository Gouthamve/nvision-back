// @flow

const keystone = require('keystone');
const User = keystone.list('User');

exports = module.exports = (done : Function) => {
  new User.model({
    name: {first: 'Goutham', last: 'Veeramachaneni'},
    email: 'cs14btech11014@iith.ac.in',
    password: 'admin',
    canAccessKeystone: true
  }).save(done);
};
