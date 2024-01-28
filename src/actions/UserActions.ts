'use server'

import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

async function createUser(user: Prisma.UserCreateInput): Promise<void> {
  await prisma.user.create({ data: user })
}

export { createUser }
