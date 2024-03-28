import React from 'react'
import '../static/header.css'

function Heading({ heading }) {
    return (
        <>
            <div className="bghead p-3  h-20 text-center">

                <h2 className="text-light">{heading}</h2>
            </div>
        </>
    )
}

export default Heading
