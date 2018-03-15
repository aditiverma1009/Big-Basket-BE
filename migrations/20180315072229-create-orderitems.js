

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('orderitems', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    orderId: {
      type: Sequelize.INTEGER,
    },
    ordereditemid: {
      type: Sequelize.INTEGER,
    },
    orderedquantity: {
      type: Sequelize.INTEGER,
    },
    orderedcost: {
      type: Sequelize.FLOAT,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('orderitems'),
};
