import React from 'react'
import './Footer.css'

import Logo from '../Images/clutch-shot-logo-01.png'
import LinkedinLogo from '../Images/linkedin-icon-01.png'
import GithubLogo from '../Images/github-logo.png'

function Footer () {
    return (
        <div className='container-footer d-flex flex-column  vw-100'>

        <div className='info mt-4 mb-2'>
        <img src={Logo} alt='logo-clutch-shot' />
        <br/>
        <span className='copyright mt-2'>Cluth Shot ©</span>
        <div className='aboutme d-flex justify-content-center align-items-center'>
       
        <p className='my-name d-flex align-items-center mt-4 mx-3'>
            Created by:<br/> 
            Jefferson Inácio</p>
        <a className='ancor d-flex justify-content-center align-items-center mt-3 mb-1' href='https://www.linkedin.com/in/jefferson-inácio-b232211a0/'>
        <img src={LinkedinLogo} alt='linkedin-icon-logo' className=' mx-1' />
        </a>
        <a className='github-ancor d-flex justify-content-center align-items-center mt-3 mb-1' href='https://github.com/jeff-2k'>
            <img src={GithubLogo} alt='github-icon-logo' className=' mx-1' />
        </a>
        </div>
        </div>
        </div>

    )
}

export default Footer