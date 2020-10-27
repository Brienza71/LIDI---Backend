const db = require('../database/connectionFactory') // Importando as configs de conexão \\

//Criando Model (Tabela no banco de dados) \\
const Equipe = db.database.define('equipes', {
  cnpj: {
    type: db.Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  nome: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  empresa: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  url_logotipo: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  responsavel: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  telefone_responsavel: {
    type: db.Sequelize.STRING,
    allowNull: true
  },
  email_responsavel: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  tecnico: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  auxTecnico: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  massagista: {
    type: db.Sequelize.STRING,
    allowNull: false
  }
})

// FORÇANDO A CRIAÇÃO DA TABELA ( DATABASE ) \\
// Equipe.sync({
//   force: true
// })

module.exports = Equipe //exportando o Model \\