import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('categories', function() {
    this.route('show', { path: '/:category_id' });
  });
  this.route('landing');
  this.route('success');
});

export default Router;
