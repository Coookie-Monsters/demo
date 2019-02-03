import Component from '@ember/component';

export default Component.extend({
  init(){
    this._super(...arguments);
    console.log("foo");
  },

  isWide: false,
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    }
  }
});
