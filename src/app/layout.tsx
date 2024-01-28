import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import * as z from 'zod'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Financial Budget',
  description: 'The Financial Budget Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
    switch (issue.code) {
      case z.ZodIssueCode.too_small:
        return { message: `${issue.path} ${issue.minimum} charater(s) min` }
      default:
        return { message: ctx.defaultError }
    }
  }

  z.setErrorMap(customErrorMap)

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
