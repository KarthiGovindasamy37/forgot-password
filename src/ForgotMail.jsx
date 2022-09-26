import axios from "axios";
import { useFormik } from "formik";
import React from "react";

function ForgotMail() {
  let formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: (values) => {
      let error = {};
      if (formik.values.email === "") {
        error.email = "Please enter email id";
      }
      return error;
    },
    onSubmit: async (values) => {
      try {
        let user=await axios.post("http://localhost:3001/forgotmail", values);
        alert(user.data.message)
    } catch (error) {
        alert(error.response.data.message)
      }
    },
  });

  return (
    <div className="container-fluid ebg">
      <div className="row">
        <div className=" d-flex justify-content-center mt-5 pt-5">
          <div className="signin col col-sm-8 col-md-6 col-lg-4 mt-5 ">
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
                <div className="d-flex justify-content-center mt-5 mb-3">
                  <button type="submit" disabled={!formik.isValid} className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotMail;
