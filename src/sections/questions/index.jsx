import React from 'react'
import './index.css'
import Divider from '../../components/divisor'
import BigText from '../../components/text/bigText'

const Questions = () => {
    return (
        <div className='question__section'>
            <Divider color="#0f0f0f" />
            <BigText text="FAQ'S" color="#0f0f0f" />
        </div>
    )
}

export default Questions