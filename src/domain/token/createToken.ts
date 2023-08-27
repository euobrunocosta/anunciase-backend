import prisma from '@infra/PrismaService'

const createToken = async (data: TTokenCreate) => {
  const newToken = await prisma.token.create({ data })
  return newToken
}

export default createToken