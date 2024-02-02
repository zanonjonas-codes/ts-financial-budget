'use client'

import { createUserEmailPassword } from '@/actions/UserActions'
import { Logo } from '@/components/Logo'
import { OauthButton } from '@/components/OauthButton'
import { FormInput } from '@/components/ui/FormInput'
import { PrimaryLink } from '@/components/ui/PrimaryLink'
import { z } from '@/libs/zodInstance'
import { zodResolver } from '@hookform/resolvers/zod'
import { Prisma } from '@prisma/client'
import { FormProvider, useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { IoLogoGithub } from 'react-icons/io'

export interface ISignUpProps {}
// TODO: Extrair form para comp filho
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
  type FormType = Zod.infer<typeof signUpSchema>

  const rhfMethods = useForm<FormType>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  })

  const onSubmit = async (data: FormType): Promise<void> => {
    const user: Prisma.UserCreateInput = {
      firstName: data['First name'],
      lastName: data['Last name'],
      email: data.Email,
      password: data.Password,
    }

    const response = await createUserEmailPassword(user)
    if (response && response.isError) {
      if (response.errorName === 'USER_EMAIL_ALREADY_EXISTS') {
        rhfMethods.setError(
          'Email',
          { message: response.displayErrorMessage },
          { shouldFocus: true }
        )
      }
    }
  }

  return (
    <div className="grid md:min-w-96 md:max-w-96 px-7 pt-28 md:pt-0 items-center">
      <Logo className="mb-8" />
      <span className="text-lg font-extrabold">Create your account</span>
      <span className="text-xs mb-4">Use to create your account:</span>

      <div className="grid grid-cols-2 gap-x-2 mb-6">
        <OauthButton
          provider="google"
          label="Google"
          callbackUrl="http://finbud.servebeer.com:3000/onboarding/signup/callback"
        >
          <FcGoogle className="size-6" />
        </OauthButton>

        <OauthButton
          provider="github"
          label="Github"
          callbackUrl="http://finbud.servebeer.com:3000/onboarding/signup/callback"
        >
          <IoLogoGithub className="size-6" />
        </OauthButton>
      </div>

      <div className="flex items-center justify-center mb-3 flex-no">
        <hr className="w-full h-px border-0 dark:bg-primary " />
        <div className="text-xs px-3 bg-base-100 whitespace-nowrap">
          or continue with email
        </div>
        <hr className="w-full h-px border-0 dark:bg-primary " />
      </div>

      <FormProvider {...rhfMethods}>
        <form onSubmit={rhfMethods.handleSubmit(onSubmit)}>
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
