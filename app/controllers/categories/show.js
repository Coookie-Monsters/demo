import Controller from '@ember/controller';
import { get } from '@ember/object';
import { reads } from '@ember/object/computed';

export default Controller.extend({
  donation: reads('model.donation'),
  
  actions: {
    createDonation: function() {
      let newDonation = get(this, 'donation');
      newDonation.save();
      this.transitionToRoute('success');
    },
    // TODO: Update with power select or other addon
    setSelection: function(selected) {
      this.set('model.donation.deliveryType', selected);
    }
  }
});
