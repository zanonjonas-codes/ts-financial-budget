import * as React from 'react'
import { twMerge } from 'tailwind-merge'

export interface ISignUpModalProps {
  children?: React.ReactNode
  className?: string
}

export function SignUpModal(props: ISignUpModalProps): JSX.Element {
  const localClassName = 'modal'

  return (
    <dialog
      id="sign_up_modal"
      className={twMerge(localClassName, props.className)}
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </div>
    </dialog>
  )
}
