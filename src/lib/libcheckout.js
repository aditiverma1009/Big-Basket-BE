const Models = require('../../models');
const Sequelize = require('sequelize');

const { Op } = Sequelize;

const checkout = (order) => {
  const allCategories = Object.keys(order);

  const allIds = [];
  for (let i = 0; i < allCategories.length; i += 1) {
    const itemsInThisCategory = order[allCategories[i]];
    for (let j = 0; j < itemsInThisCategory.length; j += 1) {
      allIds.push(itemsInThisCategory[j].itemid);
    }
  }

  return Models.inventories.findAll({
    where: {
      itemid: {
        [Op.or]: allIds,
      },
    },
  }).then(records => records.map(eachRecord =>
    allCategories.map(eachCategory =>
      order[eachCategory].map((eachItem) => {
        if (eachItem.availableQuantity > eachRecord.availableQuantity) {
          return ({
            itemid: eachRecord.itemid,
            availableQuantity: eachRecord.availableQuantity,
          });
        }
        return ({});
      })))).then(allData => Promise.all(allData));
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

