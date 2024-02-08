import React from 'react'
import './index.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="content">
        <div className="socialmedia">
          <h3 className="social__media__links">Social</h3>
          <p>Linkedin</p>
        </div>

        <div className="navigation">
          <h3 className="navigation__links">Navegación</h3>
          <p>Agency</p>
          <p>Services</p>
          <p>Work</p>
          <p>Insights</p>
          <p>Contact</p>
        </div>

        <div className="contact">
          <h3 className='lets_talk'>Hablemos</h3>
          <p className='email'>Jose.rios.lm@gmail.com</p>
          <p className='phone'>+54 1125727617</p>
        </div>
      </div>
    </div>
  )
}

export default Footer