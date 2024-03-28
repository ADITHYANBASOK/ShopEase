import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Heading from './Heading';
function UserList() {
    const [users, setUsers] = useState([]);

    // Function to fetch users from the mock API
    const fetchUsers = async () => {
      try {
        // Make API call to fetch users (replace 'your-mock-api-url' with your actual API endpoint)
        const response = await axios.get('https://api.escuelajs.co/api/v1/users');
        setUsers(response.data);
         // Update users state with fetched data
         console.log(response.data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };
  
    // Fetch users when the component mounts
    useEffect(() => {
      fetchUsers();
    }, []);
  return (
    <>
    <div>
        <Heading heading="Users List"/>
      <div className="row mt-5 mgq" style={{margin:'20px'}}>
        {users.map(user => (
          <div className="col-md-3 mb-3 col-sm-6" key={user.id}>
            <div className="card">
  <div className="card-body text-center">
  <img src={user.avatar} className="card-img-top rounded-circle img-fluid" alt={user.name} style={{height:"200px",width:"250"}} />
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
