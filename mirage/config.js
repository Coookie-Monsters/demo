export default function () {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
   */
  this.passthrough('https://api.mapbox.com/**');
  this.namespace = '/api';
  let categories = [
    {
      type: 'category',
      id: 'tools',
      attributes: {
        title: "Tools / Herramientas",
        image: "/assets/images/tools.png"
      }
    },
    {
      type: 'category',
      id: 'seeds',
      attributes: {
        title: "Seeds / Semillas",
        image: "/assets/images/seeds.jpg"
      }
    },
    {
      type: 'category',
      id: 'plants',
      attributes: {
        title: "Plants / Plantas",
        image: "/assets/images/plants.png"
      }
    },
    {
      type: 'category',
      id: 'plant-starts',
      attributes: {
        title: "Plant Starts / Empizo Plantas",
        image: "/assets/images/fertilizer.png"
      }
    }
  ];

  this.get('/categories', function (db, request) {
    if (request.queryParams.title !== undefined) {
      let filteredRentals = categories.filter(function (i) {
        return i.attributes.title.toLowerCase().indexOf(request.queryParams.title.toLowerCase()) !== -1;
      });
      return {data: filteredRentals};
    } else {
      return {data: categories};
    }
  });

  this.get('/categories/:id', function (db, request) {
    return {data: categories.find((category) => request.params.id === category.id)};
  });

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');
  */
}
