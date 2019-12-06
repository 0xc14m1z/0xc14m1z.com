const findArticleBySlug = (articles, slug) =>
  (articles || []).find(article => article.slug === slug)

export { findArticleBySlug }
