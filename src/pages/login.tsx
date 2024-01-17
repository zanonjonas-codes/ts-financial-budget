/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import '../app/globals.css'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { IoLogoGithub } from 'react-icons/io'

export interface ILoginProps {}

export function Login(props: ILoginProps) {
  return (
    // <section className="grid md:grid-cols-2 grid-cols-1 justify-center items-center h-screen">
    //   <img
    //     src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg"
    //     alt="Sample image"
    //     className="object-cover w-full h-full hidden md:block"
    //   />

    //   <div className="grid grid-cols-1 items-center justify-center">
    //     <div className="grid gap-3">
    //       <input placeholder="Email" type="text" className=""></input>

    //       <input placeholder="Password" type="text"></input>
    //     </div>
    //   </div>
    // </section>

    <section className="grid grid-cols-1 items-center h-screen p-7 content-center gap-2">
      <img
        src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg"
        alt="Sample image"
        className="object-cover w-full h-full hidden "
      />

      <div className="flex mb-6">
        <Image src="/dollar.png" alt="" className="" width={30} height={30} />
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

        <button className="btn btn-outline">
          <IoLogoGithub className="size-6" />
          Github
        </button>
      </div>

      <div className="flex items-center justify-center mb-3">
        <hr className="w-full h-px bg-black border-0 dark:bg-white " />
        <span className="text-xs absolute px-3 -translate-x-1/2 left-1/2 bg-base-100">
          or continue with email
        </span>
      </div>

      <div className="grid grid-cols-1 items-center justify-center gap-y-2">
        <input placeholder="Email" type="text"></input>
        <input placeholder="Password" type="password"></input>
      </div>

      <div className="flex items-center justify-between">
        <label className="label cursor-pointer">
          <input type="checkbox" className="checkbox size-5" checked />
          <span className="label-text m-2 text-xs">Remember me</span>
        </label>
        <a className="link link-primary text-xs link-hover">Forgot password?</a>
      </div>

      <button className="btn btn-primary mb-6">Log In</button>

      <div className="flex items-center justify-center">
        <span className="text-xs">Don&apos;t have an account?</span>
        <a className="link link-primary text-xs link-hover ml-1">
          Create an account
        </a>
      </div>
    </section>
  )
}

export default Login
