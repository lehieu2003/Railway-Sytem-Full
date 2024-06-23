import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import axios from 'axios';

const UserList = ({ onEdit }) => {
    const [users, setUsers] = useState([]);
    const [openAddUserDialog, setOpenAddUserDialog] = useState(false);
    const [newUserData, setNewUserData] = useState({ username: '', email: '', password: '' });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get('http://localhost:8080/api/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    };

    const deleteUser = (userId) => {
        axios.delete(`http://localhost:8080/api/users/${userId}`)
            .then(() => {
                setUsers(users.filter(user => user.user_id !== userId));
            })
            .catch(error => console.error('Error deleting user:', error));
    };

    const updateUser = (userId, updatedUserData) => {
        axios.put(`http://localhost:8080/api/users/${userId}`, updatedUserData)
            .then(() => {
                setUsers(users.map(user => user.user_id === userId ? { ...user, ...updatedUserData } : user));
            })
            .catch(error => console.error('Error updating user:', error));
    };

    const handleAddUserDialogOpen = () => {
        setOpenAddUserDialog(true);
    };

    const handleAddUserDialogClose = () => {
        setOpenAddUserDialog(false);
    };

    const handleAddUser = () => {
        axios.post('http://localhost:8080/api/users', newUserData)
            .then(() => {
                fetchUsers();
                handleAddUserDialogClose();
            })
            .catch(error => console.error('Error adding user:', error));
    };

    const handleNewUserDataChange = (e) => {
        const { name, value } = e.target;
        setNewUserData({ ...newUserData, [name]: value });
    };

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Password</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.user_id}>
                            <TableCell>{user.user_id}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.password}</TableCell>
                            <TableCell>
                                <Button onClick={() => onEdit(user)} variant="contained">Edit</Button>
                                <Button onClick={() => deleteUser(user.user_id)} variant="contained">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Dialog open={openAddUserDialog} onClose={handleAddUserDialogClose}>
                <DialogTitle>Add User</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Username"
                        name="username"
                        value={newUserData.username}
                        onChange={handleNewUserDataChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={newUserData.email}
                        onChange={handleNewUserDataChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        value={newUserData.password}
                        onChange={handleNewUserDataChange}
                        fullWidth
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAddUserDialogClose} color="primary">Cancel</Button>
                    <Button onClick={handleAddUser} color="primary">Save</Button>
                </DialogActions>
            </Dialog>
            <Button onClick={handleAddUserDialogOpen} variant="contained" color="primary">Add User</Button>
        </>
    );
};

export default UserList;
