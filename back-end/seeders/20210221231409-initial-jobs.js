'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('especialidade', [
      {
        id: '1', especialidade: 'ALERGOLOGIA'
      },
      {
        id: '2', especialidade: 'ANGIOLOGIA'
      }, {
        id: '3', especialidade: 'BUCO MAXILO'
      }, {
        id: '4', especialidade: 'CARDIOLOGIA CLÍNICA'
      }, {
        id: '5', especialidade: 'CARDIOLOGIA INFANTIL'
      }, {
        id: '6', especialidade: 'CIRURGIA CABEÇA E PESCOÇO'
      }, {
        id: '7', especialidade: 'CIRURGIA CARDÍACA'
      }, {
        id: '8', especialidade: 'CIRURGIA DE TÓRAX'
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('especialidade', null, {})
  }
}
