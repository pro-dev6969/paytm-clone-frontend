import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
export const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center ">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
      <Heading label={"Paytm - Clone"}/>
      <SubHeading label={"Welcome to a Paytm like application by Vedant Bhardwaj"}/>
      <div className="flex pt-4 justify-between">
      <Button label={"Sign in"} onClick={()=>{ navigate("/signin")}}/>
      <Button label={"Sign up"} onClick={()=>{ navigate("/signup")}}/>
      </div>
    </div>
    </div>
    </div>
    );
}

export default Home;
