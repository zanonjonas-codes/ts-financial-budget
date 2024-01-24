import { authOptions } from '@/app/_libs/auth'
import { getCurrentUser } from '@/app/_libs/session'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface IAvatarProps {
  className: string
  children: React.ReactNode
}

const localClassName = 'avatar'

export async function Avatar(props: IAvatarProps): Promise<JSX.Element> {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  const image = user.image as string

  return (
    <div className={twMerge(localClassName, props.className)}>
      <div className="w-12 rounded-full overflow-hidden relative">
        <div>
          <Image alt="" object-fit="cover" fill src={image} />
        </div>
      </div>
    </div>
  )
}
