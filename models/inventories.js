

module.exports = (sequelize, DataTypes) => {
  const inventory = sequelize.define('inventories', {
    itemid: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    category: DataTypes.STRING,
    brand: DataTypes.STRING,
    title: DataTypes.STRING,
    availableQuantity: DataTypes.INTEGER,
    cost: DataTypes.FLOAT,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
  }, {});

  inventory.associate = (models) => {
  };
  return inventory;
};
