import Component from '@ember/component';
import _ from 'lodash';

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
    return _.chunk(results.map(a => [a]).reduce((a, b) => a.concat(b)), 2);
  }
});
