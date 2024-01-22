import * as React from 'react'
import { twMerge } from 'tailwind-merge'

export interface IMenuProps {
  children: React.ReactNode
  className?: string
}

const localClassName = 'order-first sm:w-32 bg-purple-200'

export function Menu(props: IMenuProps): JSX.Element {
  return (
    <div>
      <div className={twMerge(localClassName, props.className)}>
        {props.children}
      </div>
    </div>
  )
}
