import React from 'react'

import { Page } from 'ui'
import { ArticlesList, Hero } from 'components'

const HomePage = () => (
  <Page title="Home">
    <Hero />
    <ArticlesList />
  </Page>
)

export default HomePage
