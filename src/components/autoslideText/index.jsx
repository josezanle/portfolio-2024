import React from 'react'
import "./index.css"
import { Icon } from '../icons'

const textContent = "Zanle Group Design"

const AnimatedText = () => {
  return (
      <div className="autoslide">
        <p className="text__content">
          {textContent}
          <span style={{ margin: "0 2em" }}><Icon name='applause' size={64} fill='#FF5851' /></span>
          {textContent}
          <span style={{ margin: "0 2em" }}><Icon name='applause' size={64} fill='#FF5851' /></span>
          {textContent}
          <span style={{ margin: "0 2em" }}><Icon name='applause' size={64} fill='#FF5851' /></span>
          {textContent}
        </p>
      </div>
  )
}

export default AnimatedText;