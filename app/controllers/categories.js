import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.store.query('category', { title: param }).then((filteredResults) => {
          return { query: param, results: filteredResults };
        });
      } else {
        return this.store.findAll('category').then((results) => {
          return { query: param, results: results };
        });
      }
    }
  }
});
