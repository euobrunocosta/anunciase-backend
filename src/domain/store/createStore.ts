import prisma from '@infra/PrismaService'

const createStore = async (store: TStoreCreate) => {
  const newStore = await prisma.store.create({
    data: store,
    include: { address: true }
  })

  return newStore
}

export default createStore