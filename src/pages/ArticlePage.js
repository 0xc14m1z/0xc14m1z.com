import React from 'react'

import { findArticleBySlug } from 'articles'

import NotFoundPage from 'pages/NotFoundPage'
import { Page } from 'ui'
import { Article } from 'components'

const ArticlePage = ({ match: { params: { slug } } }) => {
  const article = findArticleBySlug(slug)
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
