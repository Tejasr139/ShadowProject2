import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


const UserMaster = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({
      id: 0,
      userName: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      country: '',
      pincode: '',
      userTypeId: 0
    });
  
    useEffect(() => {
      fetchUsers();
    }, []);
  
    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:8000/api/users');
      setUsers(response.data);
    };
  
    const handleInputChange = (event) => {
      setUser({...user, [event.target.name]: event.target.value });
    };
  
    const handleSaveUser = async (event) => {
      event.preventDefault();
      if (user.id === 0) {
        await axios.post('http://localhost:8000/api/users', user);
      } else {
        await axios.put(`http://localhost:8000/api/users/${user.id}`, user);
      }
      fetchUsers();
      setUser({
        id: 0,
        userName: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
        userTypeId: 0
      });
    };
  
    const handleEditUser = (id) => {
      const selectedUser = users.find((user) => user.id === id);
      setUser(selectedUser);
    };
  
    const handleDeleteUser = async (id) => {
      await axios.delete(`http://localhost:8000/api/users/${id}`);
      fetchUsers();
    };
  
    return (
      <div>
        <h2>User Master</h2>
        <form onSubmit={handleSaveUser}>
          <div>
            <label htmlFor="userName">User Name:</label>
            <input type="text" name="userName" value={user.userName} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={user.password} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={user.email} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input type="text" name="address" value={user.address} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input type="text" name="city" value={user.city} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="state">State:</label>
            <input type="text" name="state" value={user.state} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="country">Country:</label>
            <input type="text" name="country" value={user.country} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="pincode">Pincode:</label>
            <input type="text" name="pincode" value={user.pincode} onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="userTypeId">User Type ID:</label>
            <input type="number" name="userTypeId" value={user.userTypeId} onChange={handleInputChange} />
          </div>
          <button type="submit">Save</button>
        </form>
        <h2>Users List</h2>
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>Pincode</th>
              <th>User Type ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.userName}</td>
               <td>{user.email}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.address}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.country}</td>
                <td>{user.pincode}</td>
                <td>{user.userTypeId}</td>
                <td>
                  <button onClick={() => handleEditUser(user.id)}>Edit</button>
                  <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default UserMaster;