import {
  FieldValues,
  UseFormRegister,
  UseFormRegisterReturn,
} from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

export interface IInputTextProps<T extends FieldValues> {
  className?: string
  password?: boolean
  label: string
  placeholder?: string
  formRegister?: UseFormRegister<T>
  id?: string
}

export function InputText<T extends FieldValues>(
  props: IInputTextProps<T>
): JSX.Element {
  const localClassName = 'relative'

  const type = props.password ? 'password' : 'text'
  const spreadFormRegister = (): UseFormRegisterReturn<string> | undefined => {
    if (props.formRegister && props.id) return props.formRegister(props.id)
  }

  return (
    <div className={twMerge(localClassName, props.className)}>
      <input
        type={type}
        id={props.id}
        className={twMerge(
          `block px-4 pb-2.5 pt-4 w-full  
        text-base-content bg-transparent rounded-btn border border-primary appearance-none 
        focus:outline-none outline-offset-2 focus:outline-primary  
        focus:ring-0 focus:border-blue-600 peer`
        )}
        placeholder=""
        {...spreadFormRegister()}
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
        {props.label}
      </label>
    </div>
  )
}
