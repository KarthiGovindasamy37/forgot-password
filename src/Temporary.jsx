import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { env } from './config'

function Temporary() {

  let navigate=useNavigate()
  let formik=useFormik({
    initialValues:{
      email:"",
      password:""
    },
    validate:(values)=>{
      let error={}
      if(formik.values.email==""){
        error.email="Please enter email"
      }
      if(formik.values.password==""){
        error.password="Please enter temporary password"
      }
      return error;
    },
    onSubmit:async(values)=>{
      try {
        let info=await axios.post(`${env.api}/temporary`,values)
        alert(info.data.message)
        if(info.status==200){
          navigate("/reset")
        formik.setValues({
          email:"",
          password:""
        })
      }
      } catch (error) {
        
        alert(error.response.data.message)
      }
    }
  })
  return (
    <div className="container-fluid pbg">
        <div className="row">
        <div className=" d-flex justify-content-center mt-5 pt-5">
           
            <div className="signin col col-sm-8 col-md-6 col-lg-4 mt-5 ">
                <div className="container">
                <div className="text-center mt-3">
                    <h2>EPIC.io</h2>
                </div>
                <form onSubmit={formik.handleSubmit}>
                   <div className="mb-3 mt-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" 
                        id="email" 
                        onChange={formik.handleChange}
                        value={formik.values.email}/>
                      </div>
                    <div className="mb-3 mt-3">
                        <label for="password" className="form-label">Temporary password</label>
                        <input type="text" className="form-control" 
                        id="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}/>
                      </div>
                      <div className="d-flex justify-content-center mt-5 mb-3">
                        <button type='submit' disabled={!formik.isValid} className="btn btn-primary">Submit</button>
                      </div>
                </form>
                
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Temporary