import React from 'react'
import Navalt from '../components/Navalt'
import Login from '../components/Login'

export default function LandingPage() {
  return (
    <>
    <Navalt appname="Finance Dashboard" option1="Login" option2="About Us" option3="Contact Us"/>
       <Login title="Finance Dashboard"/>
    </>
  )
}
