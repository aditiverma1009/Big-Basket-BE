const Models = require('../../models');

const fetchFromDb = () => Models.orders.findAll({
  limit: 10,
  order: [['createdAt', 'DESC']],
});

// const groupBy = (DataFed) => {
//   const itemByCategory = {};
//   DataFed.forEach((item) => {
//     if (item.category in itemByCategory) {
//       // console.log(`if not exist${item.category}`);
//       itemByCategory[item.category].push(item);
//     } else {
//       const { category } = item;
//       itemByCategory[category] = [];
//       itemByCategory[category].push(item);
//     }
//   });
//   return itemByCategory;
// };

const orders = () => fetchFromDb().then(ordersData => console.log(ordersData));

module.exports = {
  orders,

};

