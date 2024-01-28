'use client'

import { Logo } from '@/components/Logo'
import { FormInput } from '@/components/ui/FormInput'
import { PrimaryLink } from '@/components/ui/PrimaryLink'
import { z } from '@/libs/zodInstance'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

export interface ISignUpProps {}

export default function SignUp(props: ISignUpProps): JSX.Element {
  const signUpSchema = z
    .object({
      'First name': z.string().min(2).max(80),
      'Last name': z.string().min(2).max(80),
      Email: z.string().email(),
      Password: z.string().min(4),
      'Confirm password': z.string(),
    })
    .refine((data) => data.Password === data['Confirm password'], {
      message: "Password don't match",
      path: ['Confirm password'],
    })

  const onSubmit = (data: unknown): void => {
    console.log(data)
  }

  type FormType = Zod.infer<typeof signUpSchema>

  const methods = useForm<FormType>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  })

  return (
    <div className="grid md:min-w-96 md:max-w-96 px-7 pt-28 md:pt-0 items-center">
      <Logo className="mb-8" />
      <span className="text-lg font-extrabold">Create your account</span>

      <span className="text-xs mb-4">Welcome! Fill out the form bellow</span>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid gap-8  mb-3">
            <FormInput label="First name" name="First name" />
            <FormInput label="Last name" name="Last name" />
            <FormInput className="" label="Email" name="Email" />
            <FormInput label="Password" type="password" name="Password" />
            <FormInput
              label="Confirm password"
              type="password"
              name="Confirm password"
            />

            <button className="btn btn-primary mt-3">Create</button>
          </div>
        </form>
      </FormProvider>

      <div className="flex justify-center">
        <span className="text-xs">Already have an account?</span>
        <PrimaryLink label="Sign in" href="/onboarding/signin" />
      </div>
    </div>
  )
}