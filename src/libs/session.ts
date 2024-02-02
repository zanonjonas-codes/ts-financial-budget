import { authOptions } from '@/libs/auth'
import { DefaultSession } from 'next-auth'
import { getServerSession } from 'next-auth/next'

export async function getCurrentUser(): Promise<DefaultSession['user']> {
  const session = await getServerSession(authOptions)
  return session?.user
}
