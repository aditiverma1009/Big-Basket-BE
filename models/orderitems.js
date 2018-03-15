

module.exports = (sequelize, DataTypes) => {
  const orderitems = sequelize.define('orderitems', {
    ordersId: DataTypes.INTEGER,
    ordereditemid: DataTypes.INTEGER,
    orderedquantity: DataTypes.INTEGER,
    orderedcost: DataTypes.DECIMAL,
  }, {});
  return orderitems;
};
