import React, {  useState } from "react";
import validator from "validator";
import PasswordValidator from "password-validator";
import "./Signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export default function Signup() {


  // use history
  let navigate = useNavigate();
  // password schema

  var schema = new PasswordValidator();

  // Add properties to it
  schema
    .is()
    .min(8) // Minimum length 8
    .is()
    .max(100) // Maximum length 100
    .has()
    .uppercase() // Must have uppercase letters
    .has()
    .lowercase() // Must have lowercase letters
    .has()
    .digits(2) // Must have at least 2 digits
    .has()
    .not()
    .spaces();
  // pasword schema

  const [err, setErr] = useState({
    errstatus: false,
    errname: "",
    errclass: "",
  });

  const { errstatus, errname, errclass } = err;

  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { email, password, confirmpassword } = user;

  // registration
  function signup(e) {
    e.preventDefault();
    if (!email || !password || !confirmpassword) {
      setErr({
        ...err,
        errstatus: true,
        errclass: "danger",
        errname: "Please enter all details",
      });
      aftererr();
    }
    if (password && confirmpassword && email && !validator.isEmail(email)) {
      setErr({
        ...err,
        errstatus: true,
        errclass: "danger",
        errname: "Email not valid",
      });
      aftererr();
    }

    if (
      validator.isEmail(email) &&
      password &&
      confirmpassword &&
      password !== confirmpassword
    ) {
      setErr({
        ...err,
        errstatus: true,
        errclass: "danger",
        errname: "Passwords not matched",
      });
      aftererr();
    }
    if (
      validator.isEmail(email) &&
      password &&
      confirmpassword &&
      password === confirmpassword
    ) {
      if (!schema.validate(password)) {
        setErr({
          ...err,
          errstatus: true,
          errclass: "danger",
          errname: "Password is not strong",
        });
        aftererr();
      } else {
        // setErr({
        //   ...err,
        //   errstatus: true,
        //   errclass: "success",
        //   errname: "Register success",
        // });
        // aftererr();
        // console.log(user);
        const headers = {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Headers':'Content-Type,Access-Control-Allow-Origin,Access-Control-Allow-Methods',
          'Access-Control-Allow-Methods':'PUT'

      };
        async function postdata()
        {
          const data= await axios.post('/register/',{email,password}).then((res)=>{if(res.data.status===1)
          {
            setErr({
              ...err,
              errstatus: true,
              errclass: "success",
              errname: "Register success",
            }); 
            aftererr();
            setTimeout(() => {
              navigate('/otp',{ state:{email} })
            }, 1000);
          }
          else if(res.data.status===2)
          {
            setErr({
              ...err,
              errstatus: true,
              errclass: "danger",
              errname: res.data.message,
            }); 
            aftererr();
            setTimeout(() => {
              navigate('/login')
            }, 1000);
          }
          else if(res.data.status===3)
          {
            
            setErr({
              ...err,
              errstatus: true,
              errclass: "danger",
              errname: res.data.message,
            }); 
            aftererr();
            setTimeout(() => {
              navigate('/otp',{ state:{email}})
            }, 1000);
          }
          else{
            
            setErr({
              ...err,
              errstatus: true,
              errclass: "danger",
              errname: res.data.message,
            }); 
            aftererr();
          }
        })
        }
        postdata()
        setUser({
          email: "",
          password: "",
          confirmpassword: "",
        });
      }
    }
  }

  function aftererr() {
    setTimeout(() => {
      setErr({ ...err, errstatus: false, errname: "", errclass: "" });
    }, 2000);
  }
  // change inputs
  const changeInputs = (e) => {
    const event = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [event]: value });
  };

  return (
    <>
      <div className="container">
        <div className="form">
          <div className="sign-in-section ">
            <div
              hidden={errstatus ? !errstatus : true}
              className={errclass ? "alert  text-center alert-" + errclass : ""}
              role="alert"
            >
              {errname}
            </div>
            <h1>Register Here</h1>
            <br />
            <p> use your email</p>
            <form onSubmit={signup}>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="checkbox"
                  autoComplete="off"
                  value={email}
                  onChange={changeInputs}
                />
              </div>
              <div className="form-field">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="checkbox"
                  autoComplete="off"
                  value={password}
                  onChange={changeInputs}
                />
              </div>
              <div className="form-field">
                <label htmlFor="password">Conform Password</label>
                <input
                  id="password2"
                  name="confirmpassword"
                  type="password"
                  placeholder="Password"
                  className="checkbox"
                  autoComplete="off"
                  value={confirmpassword}
                  onChange={changeInputs}
                />
              </div>
              <div className="form-options">
                
                <Link style={{color:'blue'}} to="/login">Already Have Account?</Link>
              </div>
              <div className="form-field">
                <input
                  type="submit"
                  className="btn btn-signin"
                  value="SIGN UP"
                  autoComplete="off"
                />
              </div>
            </form>
            {/* <div className="links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms &amp; Conditions</a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
