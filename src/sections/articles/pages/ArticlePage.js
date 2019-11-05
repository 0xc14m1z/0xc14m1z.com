import React from 'react'


import { NotFoundPage } from 'sections/generic/pages'
import { Page } from 'ui'
import { Article } from 'sections/articles/components'

import { articles } from 'sections/articles/assets'
import { findArticleBySlug } from 'sections/articles/helpers'

const ArticlePage = ({ match: { params: { slug } } }) => {
  const article = findArticleBySlug(articles, slug)
  if ( !article ) return <NotFoundPage />

  return (
    <Page
      title={ article.title }
      description={ article.intro }
    >
      <Article { ...article } />
    </Page>
  )
}

export default ArticlePage
