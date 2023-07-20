import prisma from '@infra/PrismaService'

const getStores = async (citySlug: string, categorySlug?: string) => {
  const categoryWhere = categorySlug
    ? { 
      category: {
        some: {
          slug: categorySlug
        }
      }
    }
    : {}
  
  const stores = await prisma.store.findMany({
    where: {
      address: {
        city: {
          slug: citySlug
        }
      },
      ...categoryWhere
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

  return stores as unknown
}

export default getStores