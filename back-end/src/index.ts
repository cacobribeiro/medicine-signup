import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { dbConfig } from '../models'
import route from './routes'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
    this.database()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(bodyParser.urlencoded({ extended: true }))
    this.express.use(bodyParser.json())
  }

  private routes (): void {
    this.express.use(route)
  }

  private database (): void {
    dbConfig
      .authenticate()
      .then(() => console.log('connected to db'))
      .catch((err) => {
        throw console.log('connection with mysql error: ', err)
      })
  }
}

export default new App().express
