import { PrismaClient } from '@prisma/client'

class PrimsaService {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  getPrismaClient() {
    return this.prisma
  }
}

export default new PrimsaService().getPrismaClient()