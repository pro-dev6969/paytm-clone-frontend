import React,{useEffect , useState} from 'react'
import { Appbar } from '../components/Appbar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'
import axios from 'axios'

export default function Dashboard() {


  return (
    <div>
      <Appbar />
      <Balance value={1000} />
      <Users />
    </div>
  )
}
