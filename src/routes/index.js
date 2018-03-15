const products = require('./products');
const orders = require('./orders');
const checkout = require('./checkout');

module.exports = [{
  path: '/',
  method: 'GET',
  handler(request, response) {
    response('On root.');
  },
}].concat(products, orders, checkout);

