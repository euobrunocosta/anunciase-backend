import prisma from '@infra/PrismaService'

const createCategory = async (category: TCategoryCreate) => {
  const newCategory = await prisma.category.create({
    data: category
  })

  return newCategory
}

export default createCategory