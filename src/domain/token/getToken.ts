import prisma from '@infra/PrismaService'

const getToken = async (id: string) => {
  const token = await prisma.token.findFirst({
    where: { id },
    include: {
      city: true
    }
  })

  return token
}

export default getToken