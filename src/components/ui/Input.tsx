import * as React from 'react'
import { twMerge } from 'tailwind-merge'

// Redecalare forwardRef
declare module 'react' {
  function forwardRef<T, P = object>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null
}

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  className?: string
  label: string
}

function InputInner(
  props: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
): JSX.Element {
  const localClassName = 'relative'

  const { className, label, ...rest } = props

  return (
    <div className={twMerge(localClassName, className)}>
      <input
        type={props.type}
        id={props.id}
        className={twMerge(
          `block px-4 pb-2.5 pt-4 w-full  
        text-base-content bg-transparent rounded-btn border border-primary appearance-none 
        focus:outline-none outline-offset-2 focus:outline-primary  
        focus:ring-0 focus:border-blue-600 peer`
        )}
        placeholder=""
        ref={ref}
        {...rest}
      />
      <label
        htmlFor={props.id}
        className="absolute cursor-text bg-base-100 text-neutral-content text-base-400
        duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0]
           px-[3px] ml-[7px] peer-focus:text-blue-600 
           peer-focus:ml-[7px] peer-focus:px-[3px] peer-placeholder-shown:scale-100 
          peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2
           peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 
           rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-6 start-2 select-none"
      >
        {label}
      </label>
    </div>
  )
}

export const Input = React.forwardRef(InputInner)
