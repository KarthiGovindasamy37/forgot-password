import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { env } from "./config";

function Login() {

let formik=useFormik({
  initialValues:{
    email:"",
    password:""
  },
  validate:(values)=>{
    let error={};
    if(formik.values.email===""){
      error.email="Please enter email id"
    }
    if(formik.values.password===""){
      error.password="Please enter password"
    }
    return error;
  },
  onSubmit:async(values)=>{
    try {
      await axios.post(`${env.api}/userlogin`,values)
    } catch (error) {
      
    }
  }
})

  return (
    <div className="container-fluid bg">
      <div className="row">
        <div className=" d-flex justify-content-center mt-5">
          <div className="signin col col-sm-8 col-md-6 col-lg-4 mt-5  mb-5">
            <div className="container">
              <div className="text-center mt-3">
                <h2>EPIC.io</h2>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3 mt-3">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </div>
                <div className="d-flex justify-content-center mt-5">
                  <button type="submit" disabled={!formik.isValid} className="btn btn-primary">Login</button>
                </div>
              </form>
              <div className="d-flex justify-content-end mt-4">
                <h6>
                  <Link to="/forgot">Forgot password?</Link>
                </h6>
              </div>
              <div className="d-flex justify-content-end mt-3 mb-3">
                <h6 className="">
                  Don't have an account? <Link to="/">Create account</Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
