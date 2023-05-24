import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Navalt(props) {
  const navigate=useNavigate()
  const logout=()=>{
    localStorage.clear()
    navigate('/')
  }

  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <p class="navbar-brand">{props.appname}</p>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/">{props.option1} <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">{props.option2}</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contact">{props.option3}</Link>
      </li>
      <li class="nav-item" id='logout'>
      <button className="btn btn-outline-light btn-lg px-5" onClick={logout} >Log Out</button>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}
