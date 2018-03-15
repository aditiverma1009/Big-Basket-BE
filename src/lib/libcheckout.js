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
  }).then(allData => Promise.all(allData)).then(values => values);
};


const feedInOrders = (orderData) => {
  const allCategories = Object.keys(orderData);

  const allItems = [];

  for (let i = 0; i < allCategories.length; i += 1) {
    const itemsInThisCategory = orderData[allCategories[i]];
    for (let j = 0; j < itemsInThisCategory.length; j += 1) {
      allItems.push({
        ordereditemid: itemsInThisCategory[j].itemid,
        orderedquantity: itemsInThisCategory[j].availableQuantity,
        orderedcost: itemsInThisCategory[j].cost,
      });
    }
  }


  return Models.orders.create({
    orderitems: allItems,
  }, {
    include: Models.orderitems,
  });
};

module.exports = {
  checkout,
  feedInOrders,
};

