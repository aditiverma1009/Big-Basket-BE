const Models = require('../../models');
const rp = require('request-promise');

const checkProductDbPopulated = () => Models.inventories.findAll();

const fetchProductsFromAPI = () => rp.get('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/inventory').then(allProductData => allProductData);

const feedInDb = dataNow => Models.inventories.bulkCreate(dataNow);

const groupBy = (DataFed) => {
  const itemByCategory = {};
  DataFed.forEach((item) => {
    if (item.category in itemByCategory) {
      // console.log(`if not exist${item.category}`);
      itemByCategory[item.category].push(item);
    } else {
      const { category } = item;
      itemByCategory[category] = [];
      itemByCategory[category].push(item);
    }
  });
  return itemByCategory;
};

const products = () => checkProductDbPopulated()
  .then((ProductData) => {
    if (ProductData.length === 0) {
      return fetchProductsFromAPI()
        .then((allProductsFromAPI) => {
          // console.log(allProductsFromAPI);
          const NewInventory = [];
          const Inventory = JSON.parse(allProductsFromAPI).inventory;
          Inventory.forEach((step) => {
            NewInventory.push({
              itemid: step.id,
              category: step.category,
              brand: step.brand,
              title: step.title,
              availableQuantity: step.availableQuantity,
              cost: step.cost,
              description: step.description,
              imageUrl: step.imageUrl,
            });
          });
          return NewInventory;
        }).then(dataNow => feedInDb(dataNow))
        .then(DataFed => groupBy(DataFed));
    }
    return groupBy(ProductData);
  });

module.exports = {
  products,
  checkProductDbPopulated,
  fetchProductsFromAPI,
  feedInDb,
  groupBy,
};

