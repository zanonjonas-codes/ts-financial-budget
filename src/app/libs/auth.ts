import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'

import type { NextAuthConfig } from 'next-auth'

export const config = {
  theme: {
    logo: 'https://next-auth.js.org/img/logo/logo-sm.png',
  },
  providers: [GitHub],
  callbacks: {
    // async signIn({ user, account, profile, email }) {
    //   // console.log('user', user)
    //   // console.log('account', account)
    //   // console.log('profile', profile)
    //   // console.log('email', email)
    //   return true
    // },
    async redirect({ baseUrl, url }) {
      console.log('baseUrl', baseUrl) // baseUrl http://localhost:3000
      console.log('url', url) // url http://localhost:3000/login
      if (url === 'http://localhost:3000/login') return 'http://localhost:3000/'
      return 'http://localhost:3000/'
    },
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
