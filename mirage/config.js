export default function() {

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
        title: "Tools",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
      }
    },
    {
      type: 'category',
      id: 'seeds',
      attributes: {
        title: "Seeds",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg"
      }
    },
    {
      type: 'category',
      id: 'plants',
      attributes: {
        title: "Plants",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg"
      }
    }
  ];

  this.get('/categories', function(db, request) {
    if (request.queryParams.title !== undefined) {
      let filteredRentals = categories.filter(function (i) {
        return i.attributes.title.toLowerCase().indexOf(request.queryParams.title.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: categories };
    }
  });

  this.get('/categories/:id', function (db, request) {
    return { data: categories.find((category) => request.params.id === category.id) };
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
