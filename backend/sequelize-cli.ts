// sequelize-cli.ts
import { Sequelize } from 'sequelize';
const config = require('./config/sequelize');

const sequelize = new Sequelize(config.default);

module.exports = {
  config,
  'development': config,
  'test': config,
  'production': config,
  sequelize
};
