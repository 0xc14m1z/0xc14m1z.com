import list from './list'

export default list

const findArticleBySlug = slug =>
  (list || []).find(article => article.slug === slug)

export { findArticleBySlug }
