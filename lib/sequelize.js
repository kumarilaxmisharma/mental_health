// lib/sequelize.js
const { Sequelize } = require('sequelize');
require('dotenv').config({ path: './.env.local' });

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    logging: false, // Set to console.log to see SQL queries
  }
);

module.exports = sequelize;