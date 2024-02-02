'use server'

import { Prisma, PrismaClient } from '@prisma/client'
import { ActionResponse } from './ActionReponse'
import { ClientError } from '@/error/ClientError'

// TODO: Checar se o usuário já existe com o email cadastrado.
// Se existe:
//    "Create" button foi clicado, retornar erro que o usuário já existe com email cadastrado.
// Se não existe
//    "Create" button clicado, criar usuário.
//    "Oauth" button foi clicado, criar usuário com o provider com a coluna provider preenchida.
const prisma = new PrismaClient()
async function createUserEmailPassword(
  userCreateInput: Prisma.UserCreateInput
): Promise<ActionResponse> {
  const user = await prisma.user.findUnique({
    where: {
      email: userCreateInput.email,
    },
  })

  if (user) {
    return {
      ...new ClientError({
        errorName: 'USER_EMAIL_ALREADY_EXISTS',
      }).toActionResponse(),
    }
  }

  await prisma.user.create({ data: userCreateInput })

  return {
    isError: false,
  }
}

async function createUserOauth(input: {
  provider: string
  name: string
  email: string
}): Promise<ActionResponse> {
  const user = await prisma.user.findUnique({
    where: {
      email: input.email,
    },
    include: { OauthProvider: true },
  })

  if (user) {
    if (user.OauthProvider?.providerName === input.provider) {
      return {
        ...new ClientError({
          errorName: 'USER_ALREADY_REGISTERED_WITH_THIS_OAUTH_PROVIDER',
        }).toActionResponse(),
      }
    }

    return {
      ...new ClientError({
        errorName: 'USER_ALREADY_REGISTER_WITH_OTHER_AUTH_METHOD',
      }).toActionResponse(),
    }
  }

  const [firstName, ...rest] = input.name!.split(' ')
  const lastName = rest.join(' ')

  const userCreateInput: Prisma.UserCreateInput = {
    email: input.email!,
    firstName,
    lastName,
    password: 'FOO', // TODO: password must be optional,
    OauthProvider: {
      connect: {
        providerName: input.provider,
      },
    },
  }

  await prisma.user.create({ data: userCreateInput })

  return {
    isError: false,
  }
}

export { createUserEmailPassword, createUserOauth }
