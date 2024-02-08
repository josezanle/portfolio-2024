import React from 'react'
import Timeline from './timeline'
import './index.css'
import BigText from '../../components/text/bigText'
import Divider from '../../components/divisor'

const About = () => {
  return (
    <div className='about__section'>

      <div className="content">
        <h2 className='about__title'>Te contare de mi</h2>
        <p className='about__text'>Soy un Desarrollador destacado en la creación de experiencias de usuario excepcionales.
        </p>

        <Divider />

        <BigText text='STARTUPS WORKS' color='#f1f1f1'/>

        <Timeline />

        <p className='thanks__text'>" Todas estas empresas donde trabaje en aquel entonces, consolidan mi Expertise como desarrollador, afecto personal y profesional, hacia aquellas personas que me acompañaron en ese entonces, motivo por el cual, yo les agradezco y recuerdo con cariño y aprecio. "
        </p>


      </div>

    </div>
  )
}

export default About