

module.exports = (sequelize) => {
  const order = sequelize.define('orders', {
  }, {});
  order.associate = (models) => {
    order.hasMany(models.orderitems);
  };
  return order;
};
