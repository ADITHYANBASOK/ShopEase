import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Heading from './Heading';
function UserList() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://api.escuelajs.co/api/v1/users');
            setUsers(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <>
            <div>
                <Heading heading="Users List" />
                <div className="row mt-5 margin1" >
                    {users.map(user => (
                        <div className="col-md-3 mb-3 col-sm-6" key={user.id}>
                            <div className="card">
                                <div className="card-body text-center">
                                    <img src={user.avatar} className="card-img-top rounded-circle img-fluid" alt={user.name} style={{ height: "200px", width: "250" }} />
                                    <h5 className="card-title">{user.name}</h5>
                                    <p className="card-text">{user.email}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default UserList
