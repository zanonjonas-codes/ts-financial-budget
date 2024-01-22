import * as React from 'react'
import { twMerge } from 'tailwind-merge'

export interface IFooterProps {
  children: React.ReactNode
  className: string
}

const localClassName = ''

export function Footer(props: IFooterProps): JSX.Element {
  return (
    <div>
      <footer className={twMerge(localClassName, props.className)}>
        {props.children}
      </footer>
    </div>
  )
}
