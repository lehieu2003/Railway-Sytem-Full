/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { TextField, Button, Snackbar } from '@mui/material';
import axios from 'axios';

const UserForm = ({ user, onSave }) => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username || '',
        email: user.email || '',
        password: user.password || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && user.user_id) {
      axios.put(`http://localhost:8080/api/users/${user.user_id}`, formData)
        .then(() => {
          onSave();
          setShowSuccessMessage(true);
          // Reload page after saving successfully
          window.location.reload();
        })
        .catch(error => console.error('Error updating user:', error));
    } else {
      axios.post('http://localhost:8080/api/users', formData)
        .then(() => {
          onSave();
          setShowSuccessMessage(true);
          // Reload page after saving successfully
          window.location.reload();
        })
        .catch(error => console.error('Error creating user:', error));
    }
  };

  const handleSnackbarClose = () => {
    setShowSuccessMessage(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </form>
      <Snackbar
        open={showSuccessMessage}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="User saved successfully"
      />
    </>
  );
};

export default UserForm;
