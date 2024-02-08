import React from 'react'
import TopContent from './topContent'
import BottomContent from './bottomContent'

import './index.css'

const Banner = () => {
    return (
        <div className='banner__container'>
            <TopContent />
            <BottomContent />
        </div>
    )
}

export default Banner