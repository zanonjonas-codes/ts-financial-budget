import * as React from 'react'
import { twMerge } from 'tailwind-merge'

export interface AlertProps {
  children?: React.ReactNode
  className?: string
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>
  $showAlert: boolean
  timeout: number
  message: string
}

export function Alert(props: AlertProps): JSX.Element {
  const localClassName = 'alert alert-error z-50'

  // TODO: Ta bugado isso aqui
  React.useEffect(() => {
    setTimeout(() => {
      if (props.$showAlert) {
        props.setShowAlert(false)
      }
    }, props.timeout)
  })

  if (props.$showAlert) {
    return (
      <div role="alert" className={twMerge(localClassName, props.className)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{props.message}</span>
      </div>
    )
  } else {
    return <></>
  }
}
