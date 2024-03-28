import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../static/product.css'
import Card from './Card';
import Heading from './Heading';


function CategoryViewProduct() {
    const [products, setProducts] = useState([]);
    const [data, setData] = useState([])
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const fetchProductsByCategory = async () => {
            try {
                const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`);
                setProducts(response.data);
                setData(response.data[0].category)
                console.log(response.data[0].category);
                console.log('hello', response.data)
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProductsByCategory();
    }, [id]);
    return (
        <>
            <div>
                <Heading heading={data.name} />
                <div className="row margin-2" style={{ margin: "20px" }}>
                    {products.map(product => (
                        <div className="col-md-4 mb-3" key={product.id}>
                            <Card item={product} linkTo={`/products/${product.id}`} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CategoryViewProduct
