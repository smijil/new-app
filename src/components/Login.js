import axios from 'axios'
import React, { useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useEffect } from 'react'




export default function Loginalt(props) {
let navigate=useNavigate() 
const [email,setEmail]=useState()
const [password,setPassword]=useState()
const [userData,setUserData]=useState()
const [LoggedIn,setLoggedIn]=useState()

const login=()=>{
  localStorage.setItem('token-info',JSON.stringify(email))
  setLoggedIn(true)
}
 const handleSubmit=async(e)=>{
e.preventDefault()
console.log(email)
console.log(password)
   
      const fetchData=async()=>{
        
           axios.get(`/fetchdata/${email}/${password}`)
          .then((result)=>{setUserData(result.data[0])})
          .catch((err)=>{console.log(err)})

       }
       fetchData()
 }

 useEffect(()=>{
 
  if(userData){
    console.log(userData)
      login()
      navigate('/input')
  }
 },[userData])



  return (
    <>{
      (!LoggedIn)?
      <form onSubmit={handleSubmit}>
      <section className="vh-300 gradient-custom">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
            <div className="card-body p-5 text-center">
  
              <div className="mb-md-5 mt-md-4 pb-5">
  
                <h3 className="fw-bold mb-2 text-uppercase">{props.title}</h3>
                <p className="text-white-50 mb-5">Please enter your email and password!</p>
  
                <div className="form-outline form-white mb-4">
                  <input type="email" id="typeEmailX" className="form-control form-control-lg" required value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                  <label className="form-label" htmlFor="typeEmailX">Email</label>
                 
                </div>
  
                <div className="form-outline form-white mb-4">
                  <input type="password" id="typePasswordX" className="form-control form-control-lg" required value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                  <label className="form-label" htmlFor="typePasswordX">Password</label>
                 
                </div>
  
                <button className="btn btn-outline-light btn-lg px-5" type="submit" >Login</button>
  
  
              </div>
  
              <div>
                <p className="mb-0">Don't have an account? <Link to='/signup'>Sign Up</Link>
                </p>
              </div><br/>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </form>
      :
      navigate('/input')
    }
   
    </>
  )
}
