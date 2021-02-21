import * as sequelize from 'sequelize'
import { Register } from './register'
import { allJobs } from './jobs'

export const dbConfig = new sequelize.Sequelize(
  {
    username: process.env.MYSQL_USER || 'root',
    database: process.env.DB_NAME || 'gcb-data',
    port: Number(process.env.DB_PORT) || 3306,
    host: process.env.HOSTNAME || 'localhost',
    dialect: 'mysql',
    pool: {
      min: 0,
      max: 5,
      acquire: 30000,
      idle: 10000
    }
  }
)

export const User = Register(dbConfig)
export const Jobs = allJobs(dbConfig)
