'use client'
import * as React from 'react'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { IoLogoGithub } from 'react-icons/io'
import { signIn } from 'next-auth/react'

export interface ILoginProps {}

const onClickGithubHandler = async (): Promise<void> => {
  await signIn('github')
}

export default function Login(props: ILoginProps): JSX.Element {
  return (
    <div className="md:flex md:h-screen md:w-screen md:items-center md:justify-center ">
      <div className="h-screen w-screen absolute -z-10 blur-lg ">
        <Image
          src="/background_login.jpg"
          alt=""
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <section
        className="grid grid-cols-1 h-screen w-screen gap-2 md:grid-cols-2 md:size-11/12 
                    md:max-w-6xl md:justify-items-center items-start md:items-center bg-base-100 "
      >
        <div className="grid md:min-w-96 md:max-w-96 px-7 pt-28 md:pt-0">
          <div className="flex mb-8 items-center">
            <Image
              src="/dollar.png"
              alt=""
              className=""
              width={30}
              height={30}
            />
            <span className="ml-3 font-mono text-sky-700 font-bold">
              Financial Budget
            </span>
          </div>

          <span className="text-lg font-extrabold">Log in to your account</span>

          <span className="text-xs mb-4">
            Welcome back! Select the method to log in:
          </span>

          <div className="grid grid-cols-2 gap-x-2 mb-6">
            <button className="btn btn-outline">
              <FcGoogle className="size-6" />
              Google
            </button>

            <button
              className="btn btn-outline"
              onClick={() => {
                onClickGithubHandler()
              }}
            >
              <IoLogoGithub className="size-6" />
              Github
            </button>
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
            <a className="link link-primary text-xs link-hover">
              Forgot password?
            </a>
          </div>

          <button className="btn btn-primary mb-6">Log In</button>

          <div className="flex items-center justify-center">
            <span className="text-xs">Don&apos;t have an account?</span>
            <a className="link link-primary text-xs link-hover ml-1">
              Create an account
            </a>
          </div>
        </div>
        <div className="md:w-full md:h-full relative">
          <Image
            src="/login_right.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>
    </div>
  )
}
