import * as React from 'react'
import { twMerge } from 'tailwind-merge'

export interface IMainContentProps {
  children: React.ReactNode
  className?: string
}

const localClassName = ''

export function MainContent(props: IMainContentProps): JSX.Element {
  return (
    <div className={twMerge(localClassName, props.className)}>
      {props.children}
    </div>
  )
}
