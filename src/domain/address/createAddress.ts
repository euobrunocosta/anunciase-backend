import prisma from '@infra/PrismaService'

const createAddress = async (address: TAddressCreate) => {
  const newAddress = await prisma.address.create({
    data: address
  })

  return newAddress
}

export default createAddress