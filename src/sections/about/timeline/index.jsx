import React from 'react'
import "./index.css"

const DATA = [
    {
        title: "SOOFT Technology",
        description: "Software factory, Cordoba, Argentina.",
        image: "../../images/sooft.jpg",
        web: "https://www.sooft.tech/es/",
    },
    {
        title: "GreenBondMeter (GBM)",
        description: "Software factory, Buenos Aires, Argentina.",
        image: "../../images/gbm.jpg",
        web: "https://gbmland.io/",
    },
    {
        title: "Multifiber",
        description: "Software factory, Chile, Santiago de Chile",
        image: "../../images/multifiber.jpg",
        web: "https://multifiber.app/",
    },
]

const Timeline = () => {
    return (
        <div className="timeline">
            {
                DATA?.map((item, i) => {
                    return (
                        <div className="work_card" key={i}>
                            <a href={item.web} target='_blank'>
                                <img className="circle__job" src={item.image} />
                            </a>
                            <div className="text">
                                <h2 className="title__job">{item.title}</h2>
                                <p className="description">{item.description}</p>
                            </div>

                            <hr className='line' />

                        </div>
                    )
                })
            }
            <div className="work_card"><div className="text"><p className="description">Hoy</p></div></div>
        </div>
    )
}

export default Timeline