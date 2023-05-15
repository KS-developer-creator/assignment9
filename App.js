import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoList from './components/Todo';
import AddTodo from './components/addtodo';
import Server from './Server/server';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/add" component={AddTodo} />
      </Switch>
    </Router>
  );
}
