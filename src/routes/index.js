const products = require('./products');

module.exports = [{
  path: '/',
  method: 'GET',
  handler(request, response) {
    response('On root.');
  },
}].concat(products);

