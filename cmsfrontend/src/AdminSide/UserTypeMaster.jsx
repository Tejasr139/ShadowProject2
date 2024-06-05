import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserTypeMaster = () => {
  const [userTypes, setUserTypes] = useState([]);
  const [userType, setUserType] = useState({ id: 0, userType: '', updatedOn: '', updatedBy: '' });

  useEffect(() => {
    fetchUserTypes();
  }, []);

  const fetchUserTypes = async () => {
    const response = await axios.get('http://localhost:5000/api/usertypes');
    setUserTypes(response.data);
  };

  const handleAddUserType = () => {
    setUserType({ id: 0, userType: '', updatedOn: '', updatedBy: '' });
  };

  const handleEditUserType = (id) => {
    const selectedUserType = userTypes.find((userType) => userType.id === id);
    setUserType(selectedUserType);
  };

  const handleSaveUserType = async (event) => {
    event.preventDefault();
    if (userType.id === 0) {
      await axios.post('http://localhost:5000/api/usertypes', userType);
    } else {
      await axios.put(`http://localhost:5000/api/usertypes/${userType.id}`, userType);
    }
    fetchUserTypes();
    setUserType({ id: 0, userType: '', updatedOn: '', updatedBy: '' });
  };

  const handleDeleteUserType = async (id) => {
    await axios.delete(`http://localhost:5000/api/usertypes/${id}`);
    fetchUserTypes();
  };

  return (
    <div>
      <h1>User Type Master</h1>
      <table>
        <thead>
          <tr>
            <th>User Type</th>
            <th>Updated On</th>
            <th>Updated By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userTypes.map((userType) => (
            <tr key={userType.id}>
              <td>{userType.userType}</td>
              <td>{userType.updatedOn}</td>
              <td>{userType.updatedBy}</td>
              <td>
                <button onClick={() => handleEditUserType(userType.id)}>Edit</button>
                <button onClick={() => handleDeleteUserType(userType.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add User Type</h2>
      <form onSubmit={handleSaveUserType}>
        <input
          type="text"
          placeholder="User Type"
          value={userType.userType}
          onChange={(event) => setUserType({...userType, userType: event.target.value })}
        />
        <input
          type="text"
          placeholder="Updated On"
          value={userType.updatedOn}
          onChange={(event) => setUserType({...userType, updatedOn: event.target.value })}
        />
        <input
          type="text"
          placeholder="Updated By"
          value={userType.updatedBy}
          onChange={(event) => setUserType({...userType, updatedBy: event.target.value })}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={handleAddUserType}>
          Add
        </button>
      </form>
    </div>
  );
};

export default UserTypeMaster;