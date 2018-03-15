

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('inventories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    itemid: {
      type: Sequelize.INTEGER,
      unique: true,
    },
    category: {
      type: Sequelize.STRING,
    },
    brand: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    availableQuantity: {
      type: Sequelize.INTEGER,
    },
    cost: {
      type: Sequelize.DECIMAL,
    },
    description: {
      type: Sequelize.STRING,
    },
    imageUrl: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('inventories'),
};
