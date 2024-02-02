import { createUserOauth } from '@/actions/UserActions'
import { authOptions } from '@/libs/auth'
import { getCurrentUser } from '@/libs/session'
import { signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const user = await getCurrentUser()
  const searchParams = request.nextUrl.searchParams
  const provider = searchParams.get('provider')

  if (!user || !provider) {
    console.error('user ou provider vazio', user, provider)
    redirect(authOptions?.pages?.signIn || '/onboarding/signin')
  }

  const response = await createUserOauth({
    provider,
    email: user.email!,
    name: user.name!,
  })

  if (response.isError) {
    switch (response.errorName) {
      case 'USER_ALREADY_REGISTERED_WITH_THIS_OAUTH_PROVIDER':
        redirect('/')
      case 'USER_ALREADY_REGISTER_WITH_OTHER_AUTH_METHOD':
        redirect('/api/auth/signout')
        // TODO:  Para chamar o signout isso aqui precisa ser um client component
        signOut
    }
  }

  // TODO: Aqui poderia redirectionar para o usuário completar o cadastro
  redirect('/')
}
