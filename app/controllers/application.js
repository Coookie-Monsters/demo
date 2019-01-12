import Controller from '@ember/controller';

export default Controller.extend({
  isSpanish: false,
  actions: {
    translate(){
      this.toggleProperty("isSpanish");
    }
  }
});
