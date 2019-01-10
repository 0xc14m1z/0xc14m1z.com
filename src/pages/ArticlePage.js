import React from 'react'

import { findArticleBySlug } from 'articles'

import NotFoundPage from 'pages/NotFoundPage'
import Page from 'components/Page'
import Article from 'components/Article'

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

export default React.memo(ArticlePage)
