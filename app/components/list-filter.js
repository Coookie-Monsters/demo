import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.filter('').then((allResults) => this.set('rows', this.createRows(allResults.results)));
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.value;
      let filterAction = this.filter;
      filterAction(filterInputValue).then((resultsObj) => {
        if (resultsObj.query === this.value) {
          let results = resultsObj.results;
          this.set('rows', this.createRows(results));
        }
      });
    }
  },

  createRows(results){
    console.log(results);
    return results.reduce((a, b) => [a, b]).map(a => Array.isArray(a) ? a : [a]);
  }
});
