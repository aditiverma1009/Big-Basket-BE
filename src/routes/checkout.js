const libcheckout = require('../lib/libcheckout');

module.exports = [{
  path: '/checkout',
  method: 'POST',
  handler(request, response) {
    const { order } = request.payload;
    console.log(typeof (order));
    console.log(order);
    return libcheckout.checkout(order).then((DefaultArray) => {
      console.log(DefaultArray);
      if (DefaultArray.length !== 0) {
        response({
          code: 200,
          data: DefaultArray,
        });
      } else {
        console.log('hi');
        libcheckout.feedInOrdersAndInv(order).then(() => {
          response({
            code: 200,
            data: 'success',
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
