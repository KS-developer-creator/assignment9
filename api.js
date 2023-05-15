import axios from 'axios';

const apiUrl = 'http://localhost:3000/api';

export const getTodos = () => axios.get(`${apiUrl}/todos`);

export const addTodo = (todo) => axios.post(`${apiUrl}/todos`, todo);

export const updateTodo = (id, todo) => axios.put(`${apiUrl}/todos/${id}`, todo);
