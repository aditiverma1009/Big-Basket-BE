const liborders = require('../lib/liborders');

module.exports = [{
  path: '/orders',
  method: 'GET',
  handler(request, response) {
    return liborders.orders().then((lastTenOrders) => {
      response({
        code: 200,
        data: lastTenOrders,
      });
    })
      .catch(() => {
        response({
          code: 500,
          data: [],
        });
      });
  },
}];
