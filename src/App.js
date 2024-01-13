import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
  </Switch>
)

export default App
