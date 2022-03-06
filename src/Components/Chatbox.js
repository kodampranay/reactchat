import React from "react";
import './Chatbox.css'

export default function Chatbox() {
  return (
    <>
      <div className="container mt-4">
        <div className="card mx-auto" style={{ maxWidth: 400 }}>
          <div className="card-header bg-transparent">
            <div className="navbar navbar-expand p-0">
              <ul className="navbar-nav me-auto align-items-center">
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    <div
                      className="position-relative"
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        border: "2px solid #e84118",
                        padding: 2,
                      }}
                    >
                      <img
                        src="https://nextbootstrap.netlify.app/assets/images/profiles/1.jpg"
                        className="img-fluid rounded-circle"
                        alt=''
                      />
                      <span className="position-absolute bottom-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                        <span className="visually-hidden">New alerts</span>
                      </span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Nelh
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    <i className="fas fa-phone-alt=''" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    <i className="fas fa-video" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    <i className="fas fa-times" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="card-body p-4"
            style={{ height: 500, overflow: "auto" }}
          >
            <div className="d-flex align-items-baseline mb-4">
              <div className="position-relative avatar">
                <img
                  src="https://nextbootstrap.netlify.app/assets/images/profiles/1.jpg"
                  className="img-fluid rounded-circle"
                  alt=''
                />
                <span className="position-absolute bottom-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </div>
              <div className="pe-2">
                <div>
                  <div className="card card-text d-inline-block p-2 px-3 m-1">
                    Hi helh, are you available to chat?
                  </div>
                </div>
                <div>
                  <div className="small">01:10PM</div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-baseline text-end justify-content-end mb-4">
              <div className="pe-2">
                <div>
                  <div className="card card-text d-inline-block p-2 px-3 m-1">
                    Sure
                  </div>
                </div>
                <div>
                  <div className="card card-text d-inline-block p-2 px-3 m-1">
                    Let me know when you're available?
                  </div>
                </div>
                <div>
                  <div className="small">01:13PM</div>
                </div>
              </div>
              <div className="position-relative avatar">
                <img
                  src="https://nextbootstrap.netlify.app/assets/images/profiles/2.jpg"
                  className="img-fluid rounded-circle"
                  alt=''
                />
                <span className="position-absolute bottom-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </div>
            </div>
            <div className="d-flex align-items-baseline mb-4">
              <div className="position-relative avatar">
                <img
                  src="https://nextbootstrap.netlify.app/assets/images/profiles/1.jpg"
                  className="img-fluid rounded-circle"
                  alt=''
                />
                <span className="position-absolute bottom-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </div>
              <div className="pe-2">
                <div>
                  <div className="card card-text d-inline-block p-2 px-3 m-1">
                    3:00pm??
                  </div>
                </div>
                <div>
                  <div className="small">Edited - 01:13PM</div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-baseline text-end justify-content-end mb-4">
              <div className="pe-2">
                <div>
                  <div className="card card-text d-inline-block p-2 px-3 m-1">
                    Cool
                  </div>
                </div>
                <div>
                  <div className="card card-text p-2 px-3 m-1 mb-5">
                    <div className="row align-items-center">
                      <div className="col-1">
                        <a href>
                          <i className="fas fa-play" />
                        </a>
                      </div>
                      <div className="col">
                        <div
                          className="progress"
                          style={{ width: 100, height: 4 }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "35%" }}
                            aria-valuenow={35}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="small fw-bold">0:34</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-relative avatar">
                <img
                  src="https://nextbootstrap.netlify.app/assets/images/profiles/2.jpg"
                  className="img-fluid rounded-circle"
                  alt=''
                />
                <span className="position-absolute bottom-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </div>
            </div>
          </div>
          <div className="card-footer bg-white position-absolute w-100 bottom-0 m-0 p-1">
            <div className="input-group">
              <div className="input-group-text bg-transparent border-0">
                <button className="btn btn-light text-secondary">
                  <i className="fas fa-paperclip" />
                </button>
              </div>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Write a message..."
              />
              <div className="input-group-text bg-transparent border-0">
                <button className="btn btn-light text-secondary">
                  <i className="fas fa-smile" />
                </button>
              </div>
              <div className="input-group-text bg-transparent border-0">
                <button className="btn btn-light text-secondary">
                  <i className="fas fa-microphone" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
