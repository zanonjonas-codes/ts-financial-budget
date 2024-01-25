'use client'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

import { signOut } from 'next-auth/react'

export interface IAvatarDropdownProps {
  className?: string
  children: React.ReactNode
}

export function AvatarDropdown(props: IAvatarDropdownProps): JSX.Element {
  const localClassName =
    'dropdown dropdown-bottom dropdown-end flex items-center'

  const onClickSignOutHandler = async (): Promise<void> => {
    await signOut()
  }

  return (
    <div className={twMerge(localClassName, props.className)}>
      <div tabIndex={0} role="button" className="btn w-12 h-12">
        {props.children}
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44"
      >
        <li>
          <a onClick={onClickSignOutHandler}>Sign Out</a>
          {/* <a>Sign Out</a> */}
        </li>
      </ul>
    </div>
  )
}
