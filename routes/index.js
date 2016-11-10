const keystone = require('keystone');
const domains = require('./api/domains');

// Handle other errors
keystone.set('500', function(err, req, res, next) {
    var title, message;
    if (err instanceof Error) {
        message = err.message;
        err = err.stack;
    }
    res.err(err, title, message);
});

// Bind Routes
exports = module.exports = function(app) {

  // Domain API
  app.get('/domains', domains.getDomains);
  app.get('/domains/:domain', domains.getDomain);
  app.get('/domains/:domain/events', domains.getEventsOfDomain);
  app.get('/domains/:domain/events/:event', domains.getEvent);
};
