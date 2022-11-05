import axios from 'axios';

const http = axios.create({ baseURL: 'http://127.0.0.1:5000/api'});

//http methods - get, post, patch, delete
//CRUD - create (post), read(get), update(patch), delete (delete)

export const getUsers = () => http.get('/users');

export const deleteUser = (id) => {
    http.delete(`/users/${id}`);
}

export const createUser = (data) => http.post('/users', data);

export const updateUser = ({userId, values}) => http.patch(
    `/users/${userId}` , values
);