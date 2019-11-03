import React from 'react'

import articles from 'articles'
import { Message } from 'ui'
import Preview from './Preview'

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

export default ArticlesList
