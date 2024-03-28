import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../store/CartContext.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Card({ item, linkTo }) {
    const { dispatch } = useCart(); // Get the dispatch function from the useCart hook

    const handleAddToCart = () => {
        // Dispatch an action to add the product to the cart
        dispatch({ type: 'ADD_TO_CART', payload: item });
        toast.success('Item added to cart');

    };
    return (
        <>
            <ToastContainer />
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
                        <button className="btn btn-success" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
