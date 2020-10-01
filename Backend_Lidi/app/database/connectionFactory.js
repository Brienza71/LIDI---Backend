const Sequelize = require('sequelize'); //Importando biblioteca sequelize
require('dotenv').config();

// const database = new Sequelize(
//   process.env.DB_DATABASE || 'fiecdev11',
//   process.env.DB_USER || 'fiecdev11',
//   process.env.DB_PASSWORD || 'd3vcaf385', {
//     //configuranco conexão com banco
//     port: process.env.DB_PORT || 3306,
//     host: process.env.DB_HOST || 'mysql.fiecdev.kinghost.net', 
//     dialect: process.env.DB_CONNECTION || 'mysql'
//   }
// );

const database = new Sequelize('fiecdev11', 'fiecdev11', 'd3vcaf385', {
    //configuranco conexão com banco
    host: 'mysql.fiecdev.kinghost.net', 
    dialect: 'mysql'
  }
);

module.exports = {
  Sequelize: Sequelize,
  database: database
}; //exportando