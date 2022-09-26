import React from 'react'

function PasswordChange() {
  return (
    <div className="container-fluid pbg">
        <div className="row">
        <div className=" d-flex justify-content-center mt-5 pt-5">
           
            <div className="signin col col-sm-8 col-md-6 col-lg-4 mt-5 ">
                <div className="container">
                <div className="text-center mt-3">
                    <h2>EPIC.io</h2>
                </div>
                <form action="">
                    <div className="mb-3 mt-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="text" className="form-control" id="password" placeholder=""/>
                      </div>
                      <div className="mb-3 mt-3">
                        <label for="confirm-password" className="form-label">Confirm Password</label>
                        <input type="text" className="form-control" id="confirm-password" placeholder=""/>
                      </div>
                      <div className="d-flex justify-content-center mt-5 mb-3">
                        <button className="btn btn-primary">Submit</button>
                      </div>
                </form>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default PasswordChange