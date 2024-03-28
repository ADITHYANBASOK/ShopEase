import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Heading from './Heading';
function CategoryList() {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
            setCategories(response.data); 
            console.log(response.data);
        } catch (error) {
            console.error('Failed to fetch categories:', error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);
    return (
        <>
            <div>
                <Heading heading="Categories" />
                <div className="row margin-2" style={{ margin: "20px" }}>
                    {categories.slice(0, 5).map(category => (
                        <div className="col-md-4 mb-3" key={category.id}>
                            <div className="card">
                                <img src={category.image} className="card-img-top" alt={category.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{category.name}</h5>
                                    <Link to={`/categories/${category.id}`} className="btn btn-primary">View Products</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CategoryList
