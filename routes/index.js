const keystone = require('keystone');
const importRoutes = keystone.importer(__dirname);

const routes = {
  views: importRoutes('./views'),
  domains: require('./api/domains')
}

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
  // views
  app.get('/', routes.views.index);

  // Domain API
  app.get('/domains', routes.domains.getDomains);
  app.get('/domains/:domain', routes.domains.getDomain);
  app.get('/domains/:domain/events', routes.domains.getEventsOfDomain);
  app.get('/domains/:domain/events/:event', routes.domains.getEvent);
};
