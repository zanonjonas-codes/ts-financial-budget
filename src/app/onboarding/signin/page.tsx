import { PrimaryLink } from '@/components/ui/PrimaryLink'
import { FcGoogle } from 'react-icons/fc'
import { IoLogoGithub } from 'react-icons/io'
import { Logo } from '../../../components/Logo'
import { ProviderLoginButton } from '../../../components/ProviderLoginButton'

export interface ILoginProps {}

export default function Login(props: ILoginProps): JSX.Element {
  return (
    <div className="grid md:min-w-96 md:max-w-96 px-7 pt-28 md:pt-0">
      <Logo className="mb-8" />

      <span className="text-lg font-extrabold">Log in to your account</span>

      <span className="text-xs mb-4">
        Welcome back! Select the method to log in:
      </span>

      <div className="grid grid-cols-2 gap-x-2 mb-6">
        <ProviderLoginButton provider="google" label="Google">
          <FcGoogle className="size-6" />
        </ProviderLoginButton>

        <ProviderLoginButton provider="github" label="Github">
          <IoLogoGithub className="size-6" />
        </ProviderLoginButton>
      </div>

      <div className="flex items-center justify-center mb-3 flex-no">
        <hr className="w-full h-px border-0 dark:bg-primary " />
        <div className="text-xs px-3 bg-base-100 whitespace-nowrap">
          or continue with email
        </div>
        <hr className="w-full h-px border-0 dark:bg-primary " />
      </div>

      <div className="grid grid-cols-1 items-center justify-center gap-y-3">
        <input
          placeholder="Email"
          type="text"
          className="input input-primary"
        />
        <input
          placeholder="Password"
          type="password"
          className="input input-primary"
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="label cursor-pointer">
          <input type="checkbox" className="checkbox size-5 checked" />
          <span className="label-text m-2 text-xs">Remember me</span>
        </label>
        <a className="link link-primary text-xs link-hover">Forgot password?</a>
      </div>

      <button className="btn btn-primary mb-6">Log In</button>

      <div className="flex items-center justify-center">
        <span className="text-xs">Don&apos;t have an account?</span>
        <PrimaryLink label="Create an account" href="/onboarding/signup" />
      </div>
    </div>
  )
}
