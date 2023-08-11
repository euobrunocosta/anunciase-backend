import prisma from '@infra/PrismaService'

const deleteLink = async (id: string) => {
  await prisma.link.delete({
    where: { id }
  })
}

export default deleteLink