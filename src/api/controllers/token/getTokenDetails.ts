import { Request, Response } from 'express'

const getTokenDetails = async (_: Request, res: Response) => {
  res.send({ token: res.locals.token })
}

export default getTokenDetails