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
    let resultsArray = [];
    results.forEach(result => resultsArray.push(result));

    let rows = [];
    for(let i = 0; i < resultsArray.length; i += 2){
      if(i + 1 >= resultsArray.length){
        rows.push([resultsArray[i]]);
        break;
      }
      rows.push([resultsArray[i], resultsArray[i+1]]);
    }
    console.log(rows);
    return rows;
  }
});
