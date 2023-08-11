import prisma from '@infra/PrismaService'

const createAddress = async (address: TAddressData) => {
  const newAddress = await prisma.address.create({
    data: address
  })

  return newAddress
}

export default createAddress