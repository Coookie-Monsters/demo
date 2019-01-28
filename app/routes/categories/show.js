import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model(params) {
    
    return hash({
      donation: this.store.createRecord('donation'),
      category: this.store.findRecord('category', params.category_id)
    });
  }
});
