const keystone = require('keystone');
const importRoutes = keystone.importer(__dirname);

const routes = {
  views: importRoutes('./views')
}

// Bind Routes
exports = module.exports = function(app) {
  app.get('/', routes.views.index);
}
