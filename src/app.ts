import cors from 'cors'
import express, { Application } from 'express'
import routes from './api/routes'

class App {
  private express: Application

  public constructor() {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  private middlewares() {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes() {
    this.express.use(routes)
  }

  public getAplication() {
    return this.express
  }
}

export default new App().getAplication()