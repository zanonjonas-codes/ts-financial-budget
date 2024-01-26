import Link from 'next/link'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

export interface IPrimaryLinkProps {
  className?: string
  href?: string
  label: string
}

export function PrimaryLink(props: IPrimaryLinkProps): JSX.Element {
  const localClassName = 'link link-primary text-xs link-hover ml-1'

  return (
    <>
      <Link
        className={twMerge(localClassName, props.className)}
        href={props.href ?? ''}
      >
        {props.label}
      </Link>
    </>
  )
}
