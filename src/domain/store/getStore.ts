import prisma from '@infra/PrismaService'

const getStore = async (storeSlug: string) => {
  const store = await prisma.store.findFirst({
    where: {
      slug: storeSlug
    },
    include: {
      address: {
        include: {
          city: true
        }
      },
      category: true,
      link: true
    }
  })

  return store as unknown
}

export default getStore