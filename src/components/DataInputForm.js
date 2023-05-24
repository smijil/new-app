import axios from 'axios'
import React,{ useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function DataInputForm(props) {
    let [accountbalance,setAccountBalance]=useState()
    let [expense,setExpense]=useState()
    let [income,setIncome]=useState()
    let [investedamount,setInvestedAmount]=useState()
    let [currentamount,setCurrentAmount]=useState()
    let [email,setEmail]=useState()
    let [contentpage,setcontentpage]=useState()
    let navigate=useNavigate()


    useEffect(()=>{
      let data=localStorage.getItem('token-info')
      if(data && contentpage===true)
      {
        console.log(contentpage)
        console.log(data)
        navigate('/contents')}
    },[contentpage,navigate])


    const handleSubmit=(e)=>{
      e.preventDefault()
   
      let confirm=window.confirm('Are you sure you want to submit the details')     
      if(confirm){
            
      axios.post('/input',{
        "accountbalance":accountbalance,
         "expense":expense,
         "income":income,
         "investedamount":investedamount,
         "currentamount":currentamount,
         "email":email
     }).then((res)=>{
        if(res){
          console.log(res)
          setcontentpage(true)
        }
     }).catch((err)=>{
         console.log(err)
     })
  
      }
   
    }

    const see=()=>{
      navigate('/contents')
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
              <p className="text-white-50 mb-5">Please enter your financial details!</p>

              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder='E-mail' value={email} onChange={(e)=>{setEmail(e.target.value)}}  required/>
                <label className="form-label" htmlFor="typePasswordX">E-mail</label><br></br>
              </div>
             

              <div className="form-outline form-white mb-4">
                <input type="text" id="typeAccountBalanceX" className="form-control form-control-lg" placeholder='Account Balance' value={accountbalance} onChange={(e)=>{setAccountBalance(e.target.value)}} required/>
                <label className="form-label" htmlFor="typeEmailX" >Account Balance</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="text" id="typeExpenseX" className="form-control form-control-lg" placeholder='Expense' value={expense} onChange={(e)=>{setExpense(e.target.value)}} required/>
                <label className="form-label" htmlFor="typePasswordX">Expense</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="text" id="typeIncomeX" className="form-control form-control-lg" placeholder='Income' value={income} onChange={(e)=>{setIncome(e.target.value)}}  required/>
                <label className="form-label" htmlFor="typePasswordX">Income</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="text" id="typeInvestedAmountX" className="form-control form-control-lg" placeholder='Password' value={investedamount} onChange={(e)=>{setInvestedAmount(e.target.value)}} required/>
                <label className="form-label" htmlFor="typePasswordX" >InvestedAmount</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="text" id="typeCurrentInvestedAmountX" className="form-control form-control-lg" placeholder='Current Invested Amount' value={currentamount} onChange={(e)=>{setCurrentAmount(e.target.value)}}  required/>
                <label className="form-label" htmlFor="typePasswordX">Current Invested Amount</label><br></br>
              </div>

              <button className="btn btn-outline-light btn-lg px-5" type="submit" >Submit Data</button><br/><br/>
              <button className="btn btn-outline-light btn-lg px-5" onClick={see} >View</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <button className="btn btn-outline-light btn-lg px-5" onClick={view} >view contents</button> */}
  
</section>
</form>
    </>
  )
}
