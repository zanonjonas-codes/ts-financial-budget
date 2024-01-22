import NextAuth, { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

if (!process.env.GITHUB_ID) throw new Error('GITHUB_ID env var undefined')
if (!process.env.GITHUB_SECRET)
  throw new Error('GITHUB_SECRET env var undefined')

export const config: AuthOptions = {
  theme: {
    logo: 'https://next-auth.js.org/img/logo/logo-sm.png',
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
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
    async redirect(params: { url: string; baseUrl: string }) {
      if (params.url === 'http://localhost:3000/login') return params.baseUrl
      return params.baseUrl
    },
  },
}

const handler = NextAuth(config)

export { handler as GET, handler as POST }
