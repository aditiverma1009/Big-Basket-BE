const libcheckout = require('../lib/libcheckout');

module.exports = [{
  path: '/checkout',
  method: 'POST',
  handler(request, response) {
    const { order } = request.payload;
    const orderJSON = JSON.parse(order);
    return libcheckout.checkout(orderJSON).then((DefaultArray) => {
      response({
        code: 200,
        data: DefaultArray,
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
