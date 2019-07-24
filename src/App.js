import React from 'react'
import UserForm from './UserForm.js'
import Users from './Users.js'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Switch } from 'react-router-dom'


const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={UserForm} />
        <Route path="/users" component={Users} />
      </Switch>
    </Router>
  </div>
)

export default App;
