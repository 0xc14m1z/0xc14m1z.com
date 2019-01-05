import React from 'react'

import articles from 'articles'
import Preview from 'components/Preview'

const EmptyList = () => (
  <div>
    No articles here...
  </div>
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
