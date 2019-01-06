import React from 'react'
import { Switch, Route } from 'react-router'

const IfNotHome = ({ component }) => (
  <Switch>
    <Route exact path="/" component={ null } />
    <Route component={ component } />
  </Switch>
)

export default React.memo(IfNotHome)
