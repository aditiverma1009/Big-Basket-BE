const libcheckout = require('../lib/libcheckout');

module.exports = [{
  path: '/checkout',
  method: 'POST',
  handler(request, response) {
    const { order } = request.payload;
    const orderJSON = JSON.parse(order);
    return libcheckout.checkout(orderJSON).then((DefaultArray) => {
      console.log(DefaultArray);
      if (DefaultArray.length !== 0) {
        response({
          code: 200,
          data: DefaultArray,
        });
      } else {
        console.log('hi');
        libcheckout.feedInOrdersAndInv(orderJSON).then((obj) => {
          response({
            code: 200,
            data: obj,
          });
        });
      }
    })
      .catch(() => {
        response({
          code: 500,
          data: [],
        });
      });
  },
}];
