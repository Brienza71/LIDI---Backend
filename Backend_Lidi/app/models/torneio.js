const db = require('../database/connectionFactory') // Importando as configs de conexão \\

//Criando Model (Tabela no banco de dados) \\
const Torneio = db.database.define('torneios', {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    sub_nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    tipo: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    regulamento: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    patrocinador_gold: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    patrocinador_silver: {
        type: db.Sequelize.STRING,
        allowNull: true
    }
})

// FORÇANDO A CRIAÇÃO DA TABELA ( DATABASE ) \\
// Torneio.sync({
//     force: true
// })

module.exports = Torneio //exportando o Model \\