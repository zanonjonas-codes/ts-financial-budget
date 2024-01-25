'use client'
import { signIn } from 'next-auth/react'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

export interface IProviderLoginButtonProps {
  provider: string
  label: string
  children: React.ReactNode
  className?: string
}

export function ProviderLoginButton(
  props: IProviderLoginButtonProps
): JSX.Element {
  const localClassName = 'btn btn-outline'

  return (
    <button
      className={twMerge(localClassName, props.className)}
      onClick={() => {
        signIn(props.provider)
      }}
    >
      {props.children}
      {props.label}
    </button>
  )
}
