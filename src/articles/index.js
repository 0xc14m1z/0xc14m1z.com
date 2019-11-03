const list = [
  {
    slug: 'articles/building-a-micro-version-of-react-from-scratch',
    title: 'Building a micro version of React from scratch',
    intro: 'The first of a series of articles in which I try to build a small version of React, trying to understand how it may work.',
    content: require('./building-a-micro-version-of-react-from-scratch.md'),
    tags: ['javascript', 'how to', 'react', 'experiment'],
    isWorkInProgress: true
  },
  {
    slug: 'articles/how-to-use-font-awesome-pro-with-react',
    title: 'How to use FontAwesome Pro with React',
    intro: 'Step by step from environment setup to dedicated component.',
    content: require('./how-to-use-font-awesome-pro-with-react.md'),
    tags: ['javascript', 'how to', 'react', 'font awesome']
  },
  {
    slug: 'articles/why-array-sort-in-javascript-doesnt-sort-numbers',
    title: 'Why array sort() in Javascript doesn’t sort numbers?',
    intro: 'Understand an at-first weird Javascript behaviour and "sort it out".',
    content: require('./why-array-sort-in-javascript-doesnt-sort-numbers.md'),
    tags: ['javascript', 'why']
  }
]

export default list

const findArticleBySlug = slug =>
  (list || []).find(article => article.slug === slug)

export { findArticleBySlug }
