import React from 'react'

import articles from 'articles'
import Preview from 'components/Preview'
import Message from 'components/Message'

const EmptyList = () => (
  <Message icon="empty-set" text="no articles here" />
)

const List = ({ articles }) =>
  articles.map(article =>
    <Preview
      key={ article.slug }
      { ...article }
    />
  )

const ArticlesList = () =>
  articles.length === 0
    ? <EmptyList />
    : <List articles={ articles } />

export default React.memo(ArticlesList)
