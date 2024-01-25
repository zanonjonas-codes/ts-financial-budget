import * as React from 'react'
import { FaBars } from 'react-icons/fa6'

export interface IMenuButtonProps {}

export function MenuButton(props: IMenuButtonProps): JSX.Element {
  return (
    <button className="btn btn-square btn-ghost">
      <FaBars />
    </button>
  )
}
