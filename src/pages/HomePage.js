import React from 'react'

import Page from 'components/Page'
import Hero from 'components/Hero'
import ArticlesList from 'components/ArticlesList'

const HomePage = () => (
  <Page title="Home">
    <Hero />
    <ArticlesList />
  </Page>
)

export default React.memo(HomePage)
