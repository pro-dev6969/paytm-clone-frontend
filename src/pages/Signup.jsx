import React , {useState} from 'react'
import { url } from '../url'
import { BottomWarning } from '../components/BottomWarning'
import { Button } from '../components/Button'
import Heading from '../components/Heading'
import { InputBox } from '../components/InputBox'
import SubHeading from '../components/SubHeading'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function Signup() {

  const [firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("");
  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");


  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
      <Heading label={"Sign up"}/>
      <SubHeading label={"Enter Your information to create an account"}/>
      <InputBox onChange={ e =>{
        setFirstName(e.target.value);
      }} label={"First Name"} placeholder={"John"}/>
      <InputBox onChange={ e =>{
        setLastName(e.target.value);
      }} label={"Last Name"} placeholder={"Doe"}/>
      <InputBox onChange={ e =>{
        setUsername(e.target.value);
      }} label={"Email"} placeholder={"vedbhardwaj@gmail.com"}/>
      <InputBox onChange={ e =>{
        setPassword(e.target.value);
      }} label={"Password"} placeholder={"123456"}/>
      <div className="pt-4">
      <Button label={"Sign up"} onClick={async ()=>{
        const response = await axios.post(`${url}/api/v1/user/signup`,{
          firstName,
          lastName,
          username,
          password
        })
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("username",username);
        navigate("/dashboard");
      }}/>
      </div>
      <BottomWarning label={"Already Have an Account ? "} buttonText={"Sign in"} to={"/signin"}/>
    </div>
    </div>
    </div>
  )
}
