import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import Logo from '../Images/clutch-shot-logo-01.png'
import HeroImage from '../Images/hero-image-01.png'

function NavBar (){
    return (
      <div className='container vw-100 container-fluid'>
<nav className="navbar navbar-dark vw-100 navbar-expand{-sm|-md|-lg|-xl|-xxl}">
  <div className="container-fluid">
    <Link to={'/'}>
    <span className="navbar-brand mt-3">Clutch Shot</span>
    <img src={Logo} alt='logo-clutch-shot' />
    </Link>
  </div>
</nav>
<header>
  <div className='header-container img-fluid'>
  <img src={HeroImage} alt='background-damian-lillard'/>
  </div>
</header>
</div>
    )
}

export default NavBar