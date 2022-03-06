import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import PasswordValidator from "password-validator";
import axios from "axios";

import "./Login.css";

export default function Login() {
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

  // after err
  function aftererr() {
    setTimeout(() => {
      setErr({ ...err, errstatus: false, errname: "", errclass: "" });
    }, 2000);
  }
  // after err

  const [credentials, setCredentials] = useState({
    email: "",
    pass: "",
  });

  const [err, setErr] = useState({
    errstatus: false,
    errname: "",
    errclass: "",
  });

  const { errstatus, errname, errclass } = err;

  const { email, pass } = credentials;

  // handling inputs

  function handleInput(e) {
    const event = e.target.id;
    const value = e.target.value;
    setCredentials({ ...credentials, [event]: value });
  }

  function loginSubmit(e) {
    e.preventDefault();
    if (!email || !pass) {
      setErr({
        ...err,
        errstatus: true,
        errclass: "danger",
        errname: "Please enter all details",
      });
      aftererr();
    }
    if (pass && email && !validator.isEmail(email)) {
      setErr({
        ...err,
        errstatus: true,
        errclass: "danger",
        errname: "Email not valid",
      });
      aftererr();
    }
    if (email && pass && validator.isEmail(email) && !schema.validate(pass)) {
      setErr({
        ...err,
        errstatus: true,
        errclass: "danger",
        errname: "Password is not strong",
      });
      aftererr();
    } else if (
      email &&
      pass &&
      schema.validate(pass) &&
      validator.isEmail(email)
    ) {
      // setErr({
      //   ...err,
      //   errstatus: true,
      //   errclass: "success",
      //   errname: "Register success",
      // });
      // aftererr();
      // console.log(user);
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Content-Type,Access-Control-Allow-Origin,Access-Control-Allow-Methods",
        "Access-Control-Allow-Methods": "POST",
      };
      async function postdata() {
        const data = await axios
          .post("http://localhost:5000/", { email, password: pass })
          .then((res) => {
            if (res.data.status === 2 || res.data.status === 1) {
              setErr({
                ...err,
                errstatus: true,
                errclass: "success",
                errname: res.data.message,
              });
              aftererr();
              setTimeout(() => {
                navigate("/contacts");
              }, 1000);
            } else {
              setErr({
                ...err,
                errstatus: true,
                errclass: "danger",
                errname: res.data.message,
              });
              aftererr();
            }
          });
      }
      postdata();
    }
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

            <h1>Log in</h1>
            <br />
            {/* <ul>
              <li>
                <i className="fab fa-facebook-f" />
              </li>
              <li>
                <i className="fab fa-linkedin-in" />
              </li>
              <li>
                <i className="fab fa-twitter" />
              </li>
            </ul> */}
            <p> use your email</p>
            <form onSubmit={loginSubmit}>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="text"
                  placeholder="Email"
                  className="checkbox"
                  autoComplete="off"
                  onChange={handleInput}
                  value={email}
                />
              </div>
              <div className="form-field">
                <label htmlFor="password">Password</label>
                <input
                  id="pass"
                  type="password"
                  placeholder="Password"
                  className="checkbox"
                  autoComplete="off"
                  onChange={handleInput}
                  value={pass}
                />
              </div>
              
              <div className="form-options">
                <div style={{ float: "left" }}>
                  <Link to="/register" style={{ color: "blue" }}>
                    Dont Have an Account?
                  </Link>
                </div>
                <Link to="/forget" style={{ color: "red" }}>
                  Forgot Password?
                </Link>
              </div>
              
              <div className="form-field">
                <input
                  type="submit"
                  className="btn btn-signin"
                  value="SIGN IN"
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
