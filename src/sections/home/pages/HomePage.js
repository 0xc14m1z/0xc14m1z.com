import React from 'react'

import { Page } from 'ui'
import { Hero } from 'sections/home/components'
import { ArticlesList } from 'sections/articles/components'

const HomePage = () => (
  <Page title="Home">
    <Hero />
    <ArticlesList />
  </Page>
)

export default HomePage
