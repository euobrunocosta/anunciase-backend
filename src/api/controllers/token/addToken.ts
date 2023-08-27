import createToken from '@domain/token/createToken'
import { Request, Response } from 'express'

const addToken = async (req: Request, res: Response) => {
  const {
    active,
    master,
    generate,
    cityId
  } = req.body

  const { token } = res.locals

  if (!token.generate) {
    return res.status(403).send({
      message: 'O token informado não tem permissão para gerar novos tokens'
    })
  }

  const tokenData: TTokenCreate = {
    active,
    master,
    generate,
    cityId
  }

  const newToken = await createToken(tokenData)

  res.send({ newToken })
}

export default addToken