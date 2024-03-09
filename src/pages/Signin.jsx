import React from 'react'
import { BottomWarning } from '../components/BottomWarning'
import { Button } from '../components/Button'
import Heading from '../components/Heading'
import { InputBox } from '../components/InputBox'
import SubHeading from '../components/SubHeading'

export default function Signin() {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
      <Heading label={"Sign in"}/>
      <SubHeading label={"Enter Your credentials to access your account"}/>
      <InputBox label={"Email"} placeholder={"vedbhardwaj@gmail.com"}/>
      <InputBox label={"Password"} />
      <div className="pt-4">
      <Button label={"Sign in"} onClick={"handleClick"}/>
      </div>
      <BottomWarning label={"Don't Have an Account ? "} buttonText={"Sign up"} to={"/signup"}/>
    </div>
    </div>
    </div>
  )
}
