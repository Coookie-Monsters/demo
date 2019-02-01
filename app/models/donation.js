import attr from 'ember-data/attr';
import Model from 'ember-data/model';

export default Model.extend({
  name: attr('string'),
  email: attr('string'),
  phone: attr('string'),
  description: attr('string'),
  deliveryType: attr('string')
});
