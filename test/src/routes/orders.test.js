// const server = require('../../../server');
// const libproducts = require('../../../src/lib/libproducts');
// const Models = require('../../../models');

// const options = {
//   method: 'POST',
//   url: '/orders',
//   payload: {
//     order: JSON.stringify({
//       'Fruits and Vegetables': [{ itemid: 10, availableQuantity: 20, cost: 10 }],
//       Dairy: [{ itemid: 90, availableQuantity: 20, cost: 225 },
//         { itemid: 100, availableQuantity: 20, cost: 75 }],
//     }),
//   },
// };

// describe('Testcase for root server', () => {
//   beforeEach(done => Models.inventories.destroy({ truncate: true })
//     .then(() => Models.orders.destroy({ truncate: true })
//       .then(() => Models.orderitems.destroy({ truncate: true })
//         .then(() => libproducts.fetchProductsFromAPI().then(() => done())))));

//   afterEach(done => Models.inventories.destroy({ truncate: true })
//     .then(() => Models.orders.destroy({ truncate: true })
//       .then(() => Models.orderitems.destroy({ truncate: true })
//         .then(() => done()))));

//   test('Should be type object.', (done) => {
//     server.inject(options, (response) => {
//       expect(response.result.data).toBe('success');
//       done();
//     });
//   });

//   test('Testing for result code', (done) => {
//     server.inject(options, (response) => {
//       expect(response.statusCode).toBe(200);
//       done();
//     });
//   });
// }, 50000);
