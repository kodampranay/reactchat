import React from "react";

export default function Setting() {
  return (
    <>
      <div className="container mt-4">
        <div className="card mx-auto" style={{ maxWidth: 400 }}>
          <div className="card-header bg-transparent" style={{ width: 300 }}>
            <div className="navbar navbar-expand p-0">
              <ul className="navbar-nav me-auto align-items-center">
                <li className="nav-item">
                  <a className="nav-link">
                    <div
                      className="position-relative"
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        // border: "2px solid #e84118",
                        padding: 2,
                      }}
                    ></div>
                  </a>
                </li>
                <li className="nav-item">
                  <div className="nav-link">
                    <div className="input-group" >
                      
                      
                      <div className="input-group-text bg-transparent border-0">
                        <button className="btn btn-light text-secondary">
                          <i
                            className="fas fa-sign-out-alt d-flex"
                            
                          >Logout</i>
                        </button>
                      </div>
                    </div>
                  </div>
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
                  alt=""
                />
                <span className="position-absolute bottom-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </div>
              <div className="pe-2">
                <div>
                  <div className="card card-text d-inline-block p-2 px-3 m-1">
                    James
                  </div>
                </div>
                <div>{/* <div className="small">01:10PM</div> */}</div>
              </div>
            </div>
            <hr />

            <div className="d-flex align-items-baseline mb-4">
              <div className="position-relative avatar">
                <img
                  src="https://nextbootstrap.netlify.app/assets/images/profiles/1.jpg"
                  className="img-fluid rounded-circle"
                  alt=""
                />
                <span className="position-absolute bottom-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </div>
              <div className="pe-2">
                <div>
                  <div className="card card-text d-inline-block p-2 px-3 m-1">
                    Aravindh
                  </div>
                </div>
                <div>{/* <div className="small">01:10PM</div> */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
