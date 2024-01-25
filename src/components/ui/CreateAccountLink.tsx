'use client'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { SignUpModal } from '../SignUpModal'

export interface ICreateAccountLinkProps {
  children?: React.ReactNode
  className?: string
}

export function CreateAccountLink(props: ICreateAccountLinkProps): JSX.Element {
  const handleOnClick = () => {
    document.getElementById('sign_up_modal').showModal()
  }

  const localClassName = 'link link-primary text-xs link-hover ml-1'

  return (
    <>
      <SignUpModal />
      <a
        className={twMerge(localClassName, props.className)}
        onClick={handleOnClick}
      >
        Create an account
      </a>
    </>
  )
}
