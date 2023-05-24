import React from 'react'
import Navalt from '../components/Navalt'
import SignUpData from '../components/SignUpData'

export default function SignUP() {
  return (
    <>
    <Navalt appname='Finance Dashboard' option1='Login' option2='About Us' option3='Contact Us'/>
    <SignUpData title='Details'/>
    </>
  )
}
