const db = require('../database/connectionFactory') // Importando as configs de conexão \\

//Criando Model (Tabela no banco de dados) \\
const Jogo = db.database.define('jogos', {
    data: {
        type: db.Sequelize.DataTypes.DATEONLY,
        allowNull: false
    },
    tempo: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    observacoes: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    pontuacao_A: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    pontuacao_B: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    cartao_vermelho_A: {
        type: db.Sequelize.INTEGER,
        allowNull: true
    },
    cartao_vermelho_B: {
        type: db.Sequelize.INTEGER,
        allowNull: true
    },
    cartao_amarelo_A: {
        type: db.Sequelize.INTEGER,
        allowNull: true
    },
    cartao_amarelo_B: {
        type: db.Sequelize.INTEGER,
        allowNull: true
    },
    id_torneio: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'torneios',
            key: 'id'
        }
    },
    id_time_A: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'equipes',
            key: 'id'
        }
    },
    id_time_B: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'equipes',
            key: 'id'
        }
    }
})

// FORÇANDO A CRIAÇÃO DA TABELA ( DATABASE ) \\
// Jogo.sync({
//     force: true
// })

module.exports = Jogo // Exportando o Model \\