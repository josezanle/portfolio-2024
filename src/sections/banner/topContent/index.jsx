import React, { useEffect, useState } from 'react'

import CompanyName from '../../../components/companyName'
import Logo from '../../../components/logo'
import AvailableStatus from '../../../components/availableStatus'

import './index.css'
import { Icon } from '../../../components/icons'
// import BackgroundAnimation from '../../../components/ringAnimation'

import LOGO from "./logo.png"
import STAR from "./star.png"

// const numItems = 10

const TopContent = () => {

    return (
        <div className='top__container'>
            <div className="left">
                <div className='navbar__company'>
                    <span style={{ display: "flex", alignItems: "center" }}>
                        <Logo size={40} /> <CompanyName name='Zanle' />
                    </span>

                    <AvailableStatus />
                </div>

                <h1 className='title'>DEVELOPMENT <br />TENDENCE <br />EXPLORING AI</h1>


                <p className='paragraph'>Debitis, rem laborum necessitatibus voluptatibus enim, sed maiores illo voluptatum molestiae, porro ullam corporis</p>

                <button className='black__button'>
                    <h4>Vamos</h4>
                    <Icon name='arrow-large' fill='white' />
                </button>
            </div>

            <div className="right">
            <div className="imagen-overlay"></div>
               
            </div>
        </div>
    )
}

export default TopContent