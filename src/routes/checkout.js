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
        libcheckout.feedInOrders(orderJSON).then(FedData => response({
          code: 200,
          data: FedData,
        }));
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
