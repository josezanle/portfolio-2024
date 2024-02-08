import React from 'react'
import "./index.css"

const Row = ({  justifyContent = "flex-star" || "center" || "flex-end"  }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent}}>row</div>
    )
}

export default Row