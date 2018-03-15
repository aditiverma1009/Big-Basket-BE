const libproducts = require('../lib/libproducts');

module.exports = [{
  path: '/products',
  method: 'POST',
  handler(request, response) {
    return libproducts.products().then((AllProducts) => {
      response({
        code: 200,
        data: AllProducts,
      });
    })
      .catch(() => {
        response({
          code: 500,
          data: {},
        });
      });
  },
}];
