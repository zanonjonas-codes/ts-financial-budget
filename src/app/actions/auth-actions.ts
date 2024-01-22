'use server'
import { signIn as signInLib, signOut as signOutLib } from '@/app/libs/auth'

export type SignInInput = {
  provider: string
}

export async function signIn(input: SignInInput): Promise<never> {
  return await signInLib(input.provider)
}

export async function singOut(): Promise<never> {
  return await signOutLib()
}
