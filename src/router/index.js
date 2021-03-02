import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import routes from '../routes'

export default function RootRouter() {
  return (
    <Router>
      <Switch>
        {routes.map(route => (
          <Route key={route.path} path={route.path} component={route.component} />
        ))}
        <Redirect exact to='/home' from='/' />
        <Redirect to='/404' />
      </Switch>
    </Router>
  )
}
