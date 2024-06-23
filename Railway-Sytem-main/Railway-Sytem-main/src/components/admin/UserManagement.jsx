/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';

const UserManagement = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleSave = () => {
    setSelectedUser(null);
  };

  return (
    <div>
      <UserList onEdit={handleEdit} />
      <UserForm user={selectedUser} onSave={handleSave} />
    </div>
  );
};

export default UserManagement;
