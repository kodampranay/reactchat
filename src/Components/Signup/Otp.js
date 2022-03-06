import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom';

export default function Otp() {
  const[emailid,setEmailid]=useState();
  const[otp,setOtp]=useState();
  const {state} = useLocation();
  const[timer,setTimer]=useState(0);


  const [err, setErr] = useState({
    errstatus: false,
    errname: "",
    errclass: "",
  });

  const { errstatus, errname, errclass } = err;

  
  // const{email}=state;
  const navigate= useNavigate();
    useEffect(()=>
    {
      if(state===null)
      {        
        navigate('/register')
      }
      else{
        setEmailid(state.email)
        navigate('/otp', { replace: true });
      }
    },[])
    if(emailid!==undefined)
    {
      setTimeout(() => {
        navigate(-1);
      }, 2*60*1000);
    }
    
    function submitOtp(e)
    { 
      e.preventDefault();
      if(!otp)
      {
        setErr({
          ...err,
          errstatus: true,
          errclass: "danger",
          errname: "Please Enter OTP",
        });
        aftererr();
      }
      if(otp&& otp.length!==6)
      {
        setErr({
          ...err,
          errstatus: true,
          errclass: "danger",
          errname: "OTP having 6 digits",
        });
        aftererr();

      }
      // if(otp&&otp.length===6 &&(typeof(otp)!=Number))
      // {
      //   console.log(typeof(otp))
      //   setErr({
      //     ...err,
      //     errstatus: true,
      //     errclass: "danger",
      //     errname: "Please Enter valid OTP NUMBER",
      //   });
      //   aftererr();
      // }
      else{
        
          async function sendOtp()
          {
            const datares=await axios.post('/register/otp/',{'otp':otp,email:emailid}).then((res)=>
            
            {
              if(res.data.status!==1)
              {
                setErr({
                  ...err,
                  errstatus: true,
                  errclass: "danger",
                  errname:res.data.message,
                });
                aftererr();
              }
              else if(res.data.status===1)
              {
                setErr({
                  ...err,
                  errstatus: true,
                  errclass: "success",
                  errname:res.data.message,
                });
                aftererr();
                setTimeout(() => {
                  navigate('/login')
                }, 1000);

              }
            })
          }
          sendOtp();
      }
    }
    

    // AFTER ERROR
    function aftererr() {
      setTimeout(() => {
        setErr({ ...err, errstatus: false, errname: "", errclass: "" });
      }, 2000);
    }

  return (
    <>
    
    <div className="container">
        <div className="form">
          <div className="sign-in-section">
            <div
              hidden={errstatus ? !errstatus : true}
              className={errclass ? "alert  text-center alert-" + errclass : ""}
              role="alert"
            >
              {errname}
            </div> 
              <h5 className='text-center'><div className="timer"></div></h5>
            <h1>Register Here</h1>
           
            <br />
            <p> Enter your OTP .for OTP Check your mail</p>
            <form onSubmit={submitOtp}>
              <div className="form-field">
                <label htmlFor="email">OTP</label>
                <input id="email" type="number" placeholder="OTP" className="checkbox"autoComplete="off" value={otp} onChange={(e)=>setOtp(e.target.value)} />
              </div>
              
              
              
              <div className="form-field">
                <input
                  type="submit"
                  className="btn btn-signin"
                  value="SUBMIT"autoComplete="off"
                />
              </div>
              
            </form>
            </div>
          </div>
        </div>
    </>
  )
}
