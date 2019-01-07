const list = [
  {
    slug: '2019/01/02/how-would-i-build-a-micro-version-of-react-part-1',
    date: new Date(2019, 0, 2),
    title: 'How would I build a micro version of React? - Part 1',
    intro: 'The first of a series of articles in which I try to build a small version of React, trying to understand how it may work.',
    content: require('./2019/01/02/how-would-i-build-a-micro-version-of-react-part-1.md'),
    tags: ['javascript', 'how to', 'react', 'experiment']
  },
  {
    slug: '2019/01/03/how-would-i-build-a-micro-version-of-react-part-2',
    date: new Date(2019, 0, 3),
    title: 'How would I build a micro version of React? - Part 2',
    intro: 'Second part of the series, lay out the general idea behind a framework like React.',
    content: require('./2019/01/03/how-would-i-build-a-micro-version-of-react-part-2.md'),
    tags: ['javascript', 'how to', 'react']
  },
  {
    slug: '2018/12/13/how-to-use-font-awesome-pro-with-react',
    date: new Date(2018, 11, 13),
    title: 'How to use FontAwesome Pro with React',
    intro: 'Step by step from environment setup to dedicated component.',
    content: require('./2018/12/13/how-to-use-font-awesome-pro-with-react.md'),
    tags: ['javascript', 'how to', 'react', 'font awesome']
  }
]

export default list

const findArticleBySlug = slug =>
  (list || []).find(article => article.slug === slug)

export { findArticleBySlug }
