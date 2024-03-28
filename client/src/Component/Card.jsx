import React from 'react'
import { Link } from 'react-router-dom'; 


function Card({ item, linkTo }) {
  return (
    <>
<div className="card">
  <img src={item.images} className="card-img-top img-wh" alt={item.name} />
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">Price: ${item.price}</p>
    <div className="d-flex justify-content-between align-items-center">
      {linkTo && (
        <Link to={linkTo} className="btn btn-primary">
          View Details
        </Link>
      )}
      <button className="btn btn-success" >Add to Cart</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Card
