import prisma from '@infra/PrismaService'

const updateAddress = async (address: TAddressData, addressId: string) => {
  const updatedAddress = await prisma.address.update({
    where: {
      id: addressId
    },
    data: address
  })

  return updatedAddress
}

export default updateAddress