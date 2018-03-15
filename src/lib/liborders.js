const Models = require('../../models');

const fetchFromDb = () => {
  const allArray = [];
  return Models.orders.findAll({
    limit: 10,
    order: [['createdAt', 'DESC']],
  }).then((records) => {
    records.forEach((record) => {
      const thisObj = Models.orders.findOne({
        where: {
          id: record.id,
        },
        include: [{
          model: Models.orderitems,
        }],
      });
      allArray.push(thisObj);
    });
    return allArray;
  }).then(solution => Promise.all(solution));
};

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

const orders = () => fetchFromDb().then(ordersData => ordersData);

module.exports = {
  orders,

};

