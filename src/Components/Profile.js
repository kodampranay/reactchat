import React from "react";

export default function Profile() {
    function selectImage()
    {
        document.getElementById('file-select').click(); 
    }
  return (
    <>
      <div className="container mt-4">
        <div className="card mx-auto" style={{ width: 400 }}>
          <div className="card-header bg-transparent">
            <div className="navbar navbar-expand p-0 ">
              <ul className="navbar-nav me-auto align-items-center ">
                <h4 className="m-auto">Profile </h4>
              </ul>
            </div>
          </div>
          <div
            className="card-body p-4"
            style={{ height: 500, overflow: "auto" }}
          >
              
            <div className="d-flex align-items-baseline mb-4">
            
            
              <div className="position-relative avatar-upload avatar w-25 h-25 m-auto">
                
                <img
                  src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
                  className="img-fluid rounded-circle "
                  alt=""
                />
                
                
                <span className="position-absolute bottom-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                
                
                  <span className="visually-hidden">New alerts</span>
                </span>
              
              </div>
              
              
            </div>
            <input hidden id="file-select" type="file" accept="image/png, image/gif, image/jpeg"/>
            <span onClick={selectImage} className="custom-btn" style={{position:'absolute',width:'300px',textAlign:"center",boxSizing:"border-box"}}>upload</span>  
           <br />
            <div className="form-field mt-5 text-center ">
                
                <label htmlFor="" >Name </label>
                <input style={{color:'black'}}
                  id="pass"
                  type="text"
                  placeholder="Your Name.."
                  className="checkbox"
                  autoComplete="off"
                  
                />
              </div>
              <br />
              <span className="custom-btn-2" style={{position:'absolute',width:'300px',textAlign:"center",boxSizing:"border-box"}}>SUBMIT</span> 
          </div>
          
        </div>
      </div>
    </>
  );
}
