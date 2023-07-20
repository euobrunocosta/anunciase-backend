import prisma from '@infra/PrismaService'

const getCity = async (citySlug: string) => {
  const city = await prisma.city.findFirst({
    where: { slug: citySlug }
  })
  return city
}

export default getCity