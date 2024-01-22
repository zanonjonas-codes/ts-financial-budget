import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { Logo } from '../Logo'
import { Avatar } from '../ui/Avatar'
import { MenuButton } from '../ui/MenuButton'

export interface IHeaderProps {
  children?: React.ReactNode
  className?: string
}

const localClassName = ''

export function Header(props: IHeaderProps): JSX.Element {
  return (
    <div className={twMerge(localClassName, props.className)}>
      <header className="flex py-1 px-2 justify-between items-center">
        <MenuButton />
        <Logo className="md:ml-2" />
        <Avatar className="md:ml-auto" />
      </header>
    </div>
  )
}
