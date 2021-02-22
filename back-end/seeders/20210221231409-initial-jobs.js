'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('especialidades', [
      {
        especialidade: 'ALERGOLOGIA'
      },
      {
        especialidade: 'ANGIOLOGIA'
      },
      {
        especialidade: 'BUCO MAXILO'
      },
      {
        especialidade: 'CARDIOLOGIA CLÍNICA'
      },
      {
        especialidade: 'CARDIOLOGIA INFANTIL'
      },
      {
        especialidade: 'CIRURGIA CABEÇA E PESCOÇO'
      },
      {
        especialidade: 'CIRURGIA CARDÍACA'
      },
      {
        especialidade: 'CIRURGIA DE TÓRAX'
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('especialidades', null, {})
  }
}
