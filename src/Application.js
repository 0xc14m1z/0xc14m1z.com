import React from 'react'

import { Switch, Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

import * as Pages from 'pages'

const Application = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ Pages.HomePage } />
      <Route exact path="/about" component={ Pages.AboutPage } />

      <Route path="/:slug*" component={ Pages.ArticlePage } />

      <Route component={ Pages.NotFoundPage } />
    </Switch>
  </Router>
)

export default Application
