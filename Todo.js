import React, { useState, useEffect } from 'react';
import Server from './server/server';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  // ...
}
function handleAddTodo() {
  const newTodo = { title: 'New Todo', completed: false };

  fetch('/api/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTodo),
  })
    .then((response) => response.json())
    .then((data) => setTodos([...todos, data]));
}
export default TodoList 