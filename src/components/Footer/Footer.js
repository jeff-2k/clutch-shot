import React from 'react'
import './Footer.css'
import Logo from '../Images/clutch-shot-logo-01.png'
import LinkedinLogo from '../Images/linkedin-icon-01.png'

function Footer () {
    return (
        <div className='container-footer d-flex flex-column  vw-100'>

        <div className='info mt-4 mb-2'>
        <img src={Logo} alt='logo-clutch-shot' />
        <br/>
        <span className='copyright'>Cluth Shot ©</span>
        <div className='aboutme d-flex justify-content-center align-items-center'>
       
        <a className='ancor d-flex justify-content-center align-items-center mt-3 mb-1' href='https://www.linkedin.com/in/jefferson-inácio-b232211a0/'>
        <p>Created by: Jefferson Inácio</p>
        <img src={LinkedinLogo} alt='linkedin-icon-logo' className='w-1 mx-2' />
        </a>
        </div>
        </div>
        </div>

    )
}

export default Footer