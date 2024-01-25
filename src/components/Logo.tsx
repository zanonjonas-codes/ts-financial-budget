import { IClassName } from '@/types'
import Image from 'next/image'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

export interface ILogoProps extends IClassName {}

const localClassName = 'flex items-center'

export function Logo(props: ILogoProps): JSX.Element {
  return (
    <div className={twMerge(localClassName, props.className)}>
      <Image src="/dollar.png" alt="" className="" width={30} height={30} />
      <span className="ml-3 font-mono text-sky-700 font-bold">
        Financial Budget
      </span>
    </div>
  )
}
