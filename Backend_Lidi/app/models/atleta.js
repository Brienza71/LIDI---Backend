const db = require('../database/connectionFactory') // Importando as configs de conexão \\

//Criando Model (Tabela no banco de dados) \\
const Atleta = db.database.define('atletas', {
  cpf: {
    type: db.Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  nome: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  data_nasc: {
    type: db.Sequelize.DataTypes.DATEONLY,
    allowNull: false
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  telefone: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  celular: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  endereco: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  cidade: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  estado: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  foto: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  nome_responsavel: {
    type: db.Sequelize.STRING,
    allowNull: true
  },
  cpf_responsavel: {
    type: db.Sequelize.STRING,
    allowNull: true
  },
  telefone_responsavel: {
    type: db.Sequelize.STRING,
    allowNull: true
  },
  celular_responsavel: {
    type: db.Sequelize.STRING,
    allowNull: true
  },
  id_equipe: {
    type: db.Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'equipes',
      key: 'id'
    }
  }
})

// FORÇANDO A CRIAÇÃO DA TABELA ( DATABASE ) \\
// Atleta.sync({
//   force: true
// })

module.exports = Atleta //exportando o Model \\