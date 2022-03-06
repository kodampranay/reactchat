import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-custom">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            S2H MINDS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link  " aria-current="page" href="#">
                Dashboard
              </a>
              <a className="nav-link" href="#">
                Views
              </a>
              <a className="nav-link" href="#">
                Pricing
              </a>
              <a className="nav-link" href="#">
                Feedback
              </a>
              <a className="nav-link" href="#">
                Career
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="card shadow-lg bg-custom">

      </div>

      
    </>
  );
}
