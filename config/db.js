require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DRIVER,
    operatorsAliases: false
  }
}
