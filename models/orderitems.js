

module.exports = (sequelize, DataTypes) => {
  const orderitems = sequelize.define('orderitems', {
    orderId: DataTypes.INTEGER,
    ordereditemid: DataTypes.INTEGER,
    orderedquantity: DataTypes.INTEGER,
    orderedcost: DataTypes.FLOAT,
  }, {});
  return orderitems;
};
