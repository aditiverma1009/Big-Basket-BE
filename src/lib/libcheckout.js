const Models = require('../../models');
const Sequelize = require('sequelize');

const { Op } = Sequelize;

const checkout = (order) => {
  const allCategories = Object.keys(order);
  const allIds = [];
  const allItems = [];
  const newArrayOP = [];
  for (let i = 0; i < allCategories.length; i += 1) {
    const itemsInThisCategory = order[allCategories[i]];
    for (let j = 0; j < itemsInThisCategory.length; j += 1) {
      allIds.push(itemsInThisCategory[j].itemid);
      allItems.push({
        itemid: itemsInThisCategory[j].itemid,
        availableQuantity: itemsInThisCategory[j].availableQuantity,
        cost: itemsInThisCategory[j].cost,
      });
    }
  }


  return Models.inventories.findAll({
    where: {
      itemid: {
        [Op.or]: allIds,
      },
    },
  }).then((records) => {
    records.map(eachRecord =>
      allItems.map((eachItem) => {
        if (eachItem.availableQuantity > eachRecord.availableQuantity &&
          eachItem.itemid === eachRecord.itemid) {
          newArrayOP.push({
            itemid: eachItem.itemid,
            availableQuantity: eachRecord.availableQuantity,
          });
        }
        return null;
      }));
    return newArrayOP;
  }).then(allData => Promise.all(allData)).then((values) => {
    console.log(values[0]);
    return values;
  });
};
module.exports = {
  checkout,
};

//   itemsInThisCategory.map((step) => {
//     .then((records) => {

//     });
//   });
// };


// Models.inventories.findOne({
//   where: { itemid: step.itemid },
// }).then((record) => {
//         if (record.availableQuantity < step.availableQuantity) {
//           const objectNew = {
//             itemid: record.itemid,
//             title: record.title,
//             category: record.category,
//             availableQuantity: record.availableQuantity,
//             brand: record.brand,
//           };
//           responseArray.push(objectNew);
//         }
//       }));
//       return Promise.all(itemsInThisCategory);
//     }));
// }).then(() => Promise.all(responseArray));
// return promise1;
// };

