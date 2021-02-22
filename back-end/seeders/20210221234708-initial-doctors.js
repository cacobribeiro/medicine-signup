'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Doctors',
      [
        {
          name: 'Caio Ribeiro',
          CRM: '12.256.51',
          fixFone: '(11)5562-3284',
          fone: '(11)97651-2702',
          cep: '04651-165',
          andress: 'Rua Osmar Fregona',
          numero: '71',
          especialidade: 'CARDIOLOGIA INFANTIL',
          especialidade2: 'CARDIOLOGIA CLÍNICA'
        },
        {
          name: 'Camila Vieira',
          CRM: '21.232.51',
          fixFone: '(11)5562-3284',
          fone: '(11)91231-2702',
          cep: '04651-165',
          andress: 'Rua Osmar Fregona',
          numero: '71',
          especialidade: 'CARDIOLOGIA INFANTIL',
          especialidade2: 'CARDIOLOGIA CLÍNICA'
        }
      ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Doctors', null, {})
  }
}
