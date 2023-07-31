import prisma from '@infra/PrismaService'

const createLink = async (link: TLinkCreate) => {
  const newLink = await prisma.link.create({
    data: link,
    include: {
      store: true
    }
  })

  return newLink
}

export default createLink