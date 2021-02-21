'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('especialidades', {
      id: Sequelize.STRING,
      especialidade: Sequelize.STRING
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('especialidades')
  }
}
