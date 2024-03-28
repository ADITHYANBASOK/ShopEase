import React, { useEffect, useState } from 'react'
import '../static/product.css'
import Card from './Card'
import axios from 'axios'
import Heading from './Heading';


function ProductList() {
    const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://api.escuelajs.co/api/v1/products');
      setProducts(response.data); 
      console.log(response.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
    <div>
        <Heading heading='All Products'/>
      <div className="row margin1">
      {products.map(product => (
          <div className="col-md-4 mb-3 col-sm-6" key={product.id}>
            <Card item={product} linkTo={`/products/${product.id}`} />
          </div>
        ))}
      </div>
    </div>
      
    </>
  )
}

export default ProductList
