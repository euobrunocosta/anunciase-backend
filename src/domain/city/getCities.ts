import prisma from '@infra/PrismaService'

const getCities = async () => {
  const cities = await prisma.city.findMany()
  return cities
}

export default getCities