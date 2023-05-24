import React from 'react'
import DataInputForm from '../components/DataInputForm'
import Navalt from '../components/Navalt'

export default function InputPage() {
  return (
    <>
    <Navalt appname="Finance Dashboard" option1="Login" option2="About Us" option3="Contact Us"/>
    <DataInputForm/>
    </>
  )
}
