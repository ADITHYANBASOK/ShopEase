import React from 'react'
import { useCart } from '../store/CartContext.js';
import Heading from './Heading.jsx';
import { Link } from 'react-router-dom';
import '../static/product.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cart() {
    const { state, dispatch } = useCart(); // Get the cart state using the useCart hook

    // Log the cart state to the console
    console.log(state);
    const handleRemoveFromCart = (productId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
        toast.error('Item removed from cart');

    };
    return (
        <>
            <ToastContainer />
            <div >
                <Heading heading="Cart" />

                <table className="table margin-2" >
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.items.map((product) => (
                            <tr key={product.id}>
                                <td><img src={product.images[0]} alt={product.title} style={{ maxWidth: '100px' }} /></td>
                                <td>{product.title}</td>
                                <td>${product.price}</td>
                                <td>
                                    <button className="btn btn-danger me-2" onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
                                    <Link to={`/products/${product.id}`} className="btn btn-primary">View Products</Link>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Cart
