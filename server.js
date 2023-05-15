import express, {  json } from 'express';
import { connect, connection, Schema, model } from 'mongoose';
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connect('mongodb://localhost:27017/todos', { useNewUrlParser: true });
const db = connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// Define Todo schema
const todoSchema = new Schema({
  text: String,
  completed: Boolean
});
const Todo = model('Todo', todoSchema);

// Serve static files
app.use( (path.resolve(__dirname, 'public')));

// GET request to fetch todos
app.get('/api/todos', (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching todos');
    } else {
      res.send(todos);
    }
  });
});

// POST request to add or update todos
app.post('/api/todos', json(), (req, res) => {
  const { text, completed } = req.body;
  const todo = new Todo({
    text,
    completed
  });
  todo.save((err, savedTodo) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving todo');
    } else {
      res.send(savedTodo);
    }
  });
});

// Listen for incoming connections
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
