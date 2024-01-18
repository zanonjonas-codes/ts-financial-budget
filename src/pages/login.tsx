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
    <div className="md:flex md:h-screen md:w-screen md:items-center md:justify-center">
      <div className="h-screen w-screen absolute -z-10 blur-md">
        <Image
          src="/background_login.jpg"
          alt=""
          objectFit="cover"
          layout="fill"
        ></Image>
      </div>
      <section className="grid grid-cols-1 h-screen w-screen gap-2 md:grid-cols-2 md:size-11/12 md:max-w-6xl md:justify-items-center items-center bg-base-100 ">
        <div className="grid md:min-w-96 md:max-w-96 px-7">
          <div className="flex mb-8">
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

            <button className="btn btn-outline">
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
            ></input>
            <input
              placeholder="Password"
              type="password"
              className="input input-primary"
            ></input>
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
        <img
          src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg"
          alt="Sample image"
          className="object-cover w-full h-full hidden md:block"
        />
      </section>
    </div>
  )
}

export default Login
