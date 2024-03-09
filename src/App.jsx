import React from "react"
import {BrowserRouter , Routes , Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Send from "./pages/Send";

import {Home} from './pages/Home'

function App() {


  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/send" element={<Send />} />
          <Route path="/" element={<Home />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
