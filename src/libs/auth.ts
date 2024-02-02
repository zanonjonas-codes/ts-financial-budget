import NextAuth, { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const config: AuthOptions = {
  theme: {
    logo: 'https://next-auth.js.org/img/logo/logo-sm.png',
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // async signIn({ user, account, profile, email }) {
    //   // console.log('user', user)
    //   // console.log('account', account)
    //   // console.log('profile', profile)
    //   // console.log('email', email)
    //   return true
    // },
    // async redirect(params: { url: string; baseUrl: string }) {
    //   if (params.url === 'http://finbud.servebeer.com:3000/onboarding/signin')
    //     return params.baseUrl
    //   return params.url
    // },
  },
}

export const nextAuth = NextAuth(config)
export const authOptions = config
