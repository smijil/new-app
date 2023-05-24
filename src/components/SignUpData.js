import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'




export default function SignUP(props){
  let [Name,setName]=useState()
  let [email,setEmail]=useState()
  let [phoneno,setPhoneno]=useState()
  let [work,setWork]=useState()
  let [password,setPassword]=useState()
  let [cpassword,setCpassword]=useState()
  let [lastName,setLastName]=useState()

  const handleSubmit=(e)=>{
    e.preventDefault()
    let message=window.confirm('Details submitted')
    if(message){
      axios.post('/signup',{
        "firstname":Name,
        "lastname":lastName,
        "phoneno":phoneno,
       "cpassword":cpassword,
        "work":work,
         "password":password,
        "email":email
      }).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    }
  
  }

  return (
    <>
     <form onSubmit={handleSubmit}>
    <section className="vh-300 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h3 className="fw-bold mb-2 text-uppercase">{props.title}</h3>
              <p className="text-white-50 mb-5">Please enter your details!</p>
             

              <div className="form-outline form-white mb-4">
                <input type="text" id="typeNameX" className="form-control form-control-lg" placeholder='First Name'  name='name' value={Name} onChange={(e)=>{setName(e.target.value)}} required/>
                <label className="form-label" htmlFor="typeEmailX" >First Name</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="text" id="typeLastNameX" className="form-control form-control-lg" placeholder='Last Name' name='lastname' value={lastName} onChange={(e)=>{setLastName(e.target.value)}} required/>
                <label className="form-label" htmlFor="typePasswordX">Last Name</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder='Email ID' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                <label className="form-label" htmlFor="typePasswordX">Email ID</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" className="form-control form-control-lg" name='password' placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                <label className="form-label" htmlFor="typePasswordX" >Password</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" id="typeCPasswordX" className="form-control form-control-lg" name='cpassword' placeholder='Confirm Password' value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}} required/>
                <label className="form-label" htmlFor="typePasswordX">Confirm Password</label><br></br>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="text" id="typePasswordX" className="form-control form-control-lg" placeholder='Job' name='work' value={work} onChange={(e)=>{setWork(e.target.value)}} required/>
                <label className="form-label" htmlFor="typePasswordX">Job</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="text" min='10' max='10' id="typePhonenoX" className="form-control form-control-lg" placeholder='Phone number' name='number' value={phoneno} onChange={(e)=>{setPhoneno(e.target.value)}} required/>
                <label className="form-label" htmlFor="typePasswordX">Phone Number</label>
              </div>

              <button className="btn btn-outline-light btn-lg px-5" type="submit">Sign Up</button>

              
            </div>

              
             
              

            <div>
              <p className="mb-0">Account already present?Login Here!<Link to='/'>Login</Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</form>

    </>
  )
}
