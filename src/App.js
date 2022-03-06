import "bootstrap/dist/css/bootstrap.css";
import Chatbox from "./Components/Chatbox";
import Contacts from "./Components/Contacts";
import Login from "./Components/Login/Login";
import Setting from "./Components/Setting";
import Otp from "./Components/Signup/Otp";
import Signup from "./Components/Signup/Signup";
import Cookies from 'universal-cookie';

import { BrowserRouter as Router, Route, Routes, useNavigate,useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Profile from "./Components/Profile";

function App() {
  const location=useLocation();
  
  const[lc,setLc]=useState(false);
  const navigate=useNavigate()
  const cookies = new Cookies();
  
  
  console.log(cookies.get('token'))
  useEffect(()=>{
    
    if(!cookies.get('token')){
      navigate(location.pathname);
    }
    else{
      navigate(location.pathname);

    }
    
  },[lc])
    
  // if(cookies.get("token"))
  // {
  //   setLc(true)
  // }
  // console.log(cookies.get('token'));
  // cookies.onChanged.addListener(updateCookie)
  function updateCookie()
  {
    if(cookies.get('token'))
    {
      setLc(true)
    }
    else{
      setLc(false)
    }
  }
  return (
    < >
      
        <div onTimeUpdate={updateCookie}>
        <Routes>
          {cookies.get("token") ? (
            <>
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/chat" element={<Chatbox />} />
              <Route path="*" element={<Contacts />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/otp" element={<Otp />} />
              <Route path="*" element={<Signup />} />
              
            </>
          )}

          {/* <Route path='/login' element={<Login/>}/> */}
        </Routes>
          {/* <Profile/> */}
        </div>
        {/* <Login/> */}
        {/* <Signup/> */}
        {/* <Otp/> */}
        {/* <Contacts/> */}
        {/* <Setting/> */}
        {/* <Chatbox/> */}
      
    </>
  );
}

export default App;
