'use server'

import { ClientError } from '@/error/ClientError'
import { Prisma, PrismaClient } from '@prisma/client'
// TODO: Checar se o usuário já existe com o email cadastrado.
// Se existe:
//    "Create" button foi clicado, retornar erro que o usuário já existe com email cadastrado.
// Se não existe
//    "Create" button clicado, criar usuário.
//    "Oauth" button foi clicado, criar usuário com o provider com a coluna provider preenchida.
const prisma = new PrismaClient()
async function createUser(
  userCreateInput: Prisma.UserCreateInput
  // TODO: Return type de server action precisa ter um padrão
): Promise<void | object> {
  const user = await prisma.user.findUnique({
    where: {
      email: userCreateInput.email,
    },
  })

  // TODO: Weird
  if (user) {
    return new ClientError({ name: 'USER_EMAIL_ALREADY_EXISTS' }).toObject()
  }

  await prisma.user.create({ data: userCreateInput })
}

export { createUser }
