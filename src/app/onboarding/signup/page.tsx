'use client'

import { Logo } from '@/components/Logo'
import { Input } from '@/components/ui/Input'
import { PrimaryLink } from '@/components/ui/PrimaryLink'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

export interface ISignUpProps {}

export default function SignUp(props: ISignUpProps): JSX.Element {
  const signUpSchema = z
    .object({
      firstName: z.string().min(2).max(80),
      lastName: z.string().min(2).max(80),
      email: z.string().email(),
      password: z.string().min(4),
      confirmPassword: z.string().min(4),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password don't match",
      path: ['confirmPassword'],
    })

  const onSubmit = (data: unknown): void => {
    console.log(data)
  }

  type FormType = z.infer<typeof signUpSchema>

  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm<FormType>({
    resolver: zodResolver(signUpSchema),
  })

  const watchAllFields = watch()

  return (
    <div className="grid md:w-[480px] px-7 pt-28 md:pt-0">
      <Logo className="mb-8" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 items-center justify-center gap-5 mb-3">
          <Input label="First name" id="firstName" {...register('firstName')} />

          <div style={{ color: 'red' }} className="z-40">
            {watchAllFields ? (
              <>
                <label>Watched Fields:</label>
                {JSON.stringify(watchAllFields)}
              </>
            ) : (
              ''
            )}
          </div>

          {/* <Input label="Last name" id="lastName" />
          <div style={{ color: 'red' }}>{errors?.lastName?.message}</div>
          <Input className="col-span-1" label="Email" id="email" />
          <div style={{ color: 'red' }}>{errors?.email?.message}</div>
          <Input label="Password" type="password" id="password" />
          <div style={{ color: 'red' }}>{errors?.password?.message}</div>
          <Input
            label="Confirm password"
            type="password"
            id="confirmPassword"
          /> */}
          <div style={{ color: 'red' }}>{errors?.confirmPassword?.message}</div>
          <button className="btn btn-primary col-span-2 mt-3">Create</button>
        </div>
      </form>

      <div className="flex justify-center">
        <span className="text-xs">Already have an account?</span>
        <PrimaryLink label="Sign in" href="/onboarding/signin" />
      </div>
    </div>
  )
}
