import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Todo from './components/Todo';
import AddTodo from './components/addtodo';
import Server from './Server/server';
import { Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Todo} />
      
    </Switch>
  </Router>,
  document.getElementById('root')
);
