import React from 'react'

import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import * as Paths from './paths'
import * as Pages from './pages'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={ Paths.HOME } component={ Pages.HomePage } />
      <Route exact path={ Paths.RESUME } component={ Pages.ResumePage } />
      <Route path={ Paths.ARTICLE } component={ Pages.ArticlePage } />
      <Route component={ Pages.NotFoundPage } />
    </Switch>
  </BrowserRouter>
)

export default Router
