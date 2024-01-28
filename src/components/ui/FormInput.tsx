import { ErrorMessage } from '@hookform/error-message'
import { FieldPath, FieldValues, get, useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { Input } from './Input'

export interface FormInputProps<TFormValues extends FieldValues>
  extends React.ComponentPropsWithoutRef<'input'> {
  className?: string
  label: string
  name: FieldPath<TFormValues>
}

export function FormInput<TFormValues extends FieldValues>(
  props: FormInputProps<TFormValues>
): JSX.Element {
  const localClassName = ''

  const {
    register,
    formState: { errors },
  } = useFormContext()

  const { className, ...rest } = props

  const error = get(errors || errors, props.name)

  return (
    <div
      style={{ position: 'relative' }}
      className={twMerge(localClassName, className)}
    >
      <Input invalid={error ? 1 : 0} {...rest} {...register(props.name)}>
        {
          <ErrorMessage
            errors={errors}
            name={props.name}
            as={
              <div
                className="text-xs text-error ml-4"
                style={{ position: 'absolute', bottom: '-20px' }}
              />
            }
          />
        }
      </Input>
    </div>
  )
}
