import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function SingleProductView() {
    const [product, setProduct] = useState(null);
    const {id}=useParams()
    console.log(id)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Failed to fetch product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    // Implement functionality to add product to the shopping cart
    console.log('Product added to cart:', product);
  };
  return (
    <>
     <div className='mx-10' style={{margin:'5%'}}>

     <div className="row mt-5 ">
    <div className="col-md-5 col-12">
    {product ? (
      <div>
        <img src={product.images} alt={product.name} style={{ maxWidth: '100%' }} />
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  <div className="col-md-7 col-12">
    {product && (
      <div className='mt-5'>
        <h1>{product.title}</h1>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    )}
  </div>
</div>
</div>
    </>
  )
}

export default SingleProductView
