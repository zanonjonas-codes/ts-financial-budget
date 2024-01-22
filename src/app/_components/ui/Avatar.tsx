import Image from 'next/image'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

export interface IAvatarProps {
  className: string
}

const localClassName = 'avatar'

export function Avatar(props: IAvatarProps): JSX.Element {
  return (
    <div className={twMerge(localClassName, props.className)}>
      <div className="w-12 rounded-full overflow-hidden relative">
        <div>
          <Image
            alt=""
            object-fit="cover"
            fill
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
    </div>
  )
}
