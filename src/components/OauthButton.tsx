'use client'
import { signIn } from 'next-auth/react'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

export interface OauthButtonProps {
  provider: string
  label: string
  children: React.ReactNode
  className?: string
  callbackUrl?: string
}

export function OauthButton(props: OauthButtonProps): JSX.Element {
  const localClassName = 'btn btn-outline'

  const onClickHandler = () => {
    signIn(props.provider, {
      callbackUrl: `${props.callbackUrl}?provider=${props.provider}`,
      redirect: true,
    })
  }

  return (
    <button
      className={twMerge(localClassName, props.className)}
      onClick={onClickHandler}
    >
      {props.children}
      {props.label}
    </button>
  )
}
