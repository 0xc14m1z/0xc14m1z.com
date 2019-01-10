const list = [
  {
    slug: '2019/01/02/building-a-micro-version-of-react-from-scratch',
    date: new Date(2019, 0, 2),
    title: 'Building a micro version of React from scratch',
    intro: 'The first of a series of articles in which I try to build a small version of React, trying to understand how it may work.',
    content: require('./2019/01/building-a-micro-version-of-react-from-scratch.md'),
    tags: ['javascript', 'how to', 'react', 'experiment']
  },
  {
    slug: '2018/12/13/how-to-use-font-awesome-pro-with-react',
    date: new Date(2018, 11, 13),
    title: 'How to use FontAwesome Pro with React',
    intro: 'Step by step from environment setup to dedicated component.',
    content: require('./2018/12/how-to-use-font-awesome-pro-with-react.md'),
    tags: ['javascript', 'how to', 'react', 'font awesome']
  },
  {
    slug: '2018/08/31/why-array-sort-in-javascript-doesnt-sort-numbers',
    date: new Date(2018, 11, 13),
    title: 'Why array sort() in Javascript doesn’t sort numbers?',
    intro: 'Understand an at-first weird Javascript behaviour and "sort it out".',
    content: require('./2018/08/why-array-sort-in-javascript-doesnt-sort-numbers.md'),
    tags: ['javascript', 'why']
  }
]

export default list

const findArticleBySlug = slug =>
  (list || []).find(article => article.slug === slug)

export { findArticleBySlug }
