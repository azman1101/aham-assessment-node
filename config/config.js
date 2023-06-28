require('dotenv').config();

module.exports = {
  test: {
    dialect: process.env.DATABASE_ENGINE,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    logging: (process.env.APPLICATION_DEBUG === 'true'),
  },
  production: {
    dialect: 'mysql',
    host: 'eu-cdbr-west-03.cleardb.net',
    port: 3306,
    username: 'bc9b72b5507264',
    password: 'eeb5c0bf',
    database: 'heroku_bb303c15efbc677',
  },
};
