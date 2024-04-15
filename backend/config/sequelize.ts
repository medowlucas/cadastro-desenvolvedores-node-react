// config/sequelize.ts
import { Sequelize } from 'sequelize';

// Configure as variáveis de ambiente para o seu banco de dados
const DB_NAME = process.env.DEV_DB_DATABASE || 'mydb';
const DB_USER = process.env.DEV_DB_USERNAME || 'postgres';
const DB_PASSWORD = process.env.DEV_DB_PASSWORD || 'password';
const DB_PORT = parseInt(process.env.DEV_DB_PORT || '5432', 10);

// Inicialize o Sequelize com as configurações do banco de dados
const sequelizes = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: 'db',
  port: DB_PORT,
  dialect: 'postgres',
  logging: false,
});

export default sequelizes;
