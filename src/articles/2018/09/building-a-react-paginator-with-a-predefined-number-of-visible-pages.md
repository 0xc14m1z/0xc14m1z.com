The scope of this article is to discuss my approach on developing a paginator component in React and the interesting and unexpected challenges that I found doing it.

Alongside this article, I'll write the code of the component I open sourced here: https://github.com/0xc14m1z/react-pagination-mini

My requirements are quite standard:

> we need show a "window" of N pages, some before and some after the current one, which is supposed to be in the middle.

I have to admit that, at first, I've underestimated the problem. Only when I took pencil and paper to outline a schema of the behaviour, things started to become messy.

---

## The plan

I want a component that leaves all the render work to the user taking advantage of the `renderProp` pattern, absolutely no style nor rendering will be provided.
This way, the component implements only the logic of choosing which pages to show, being super light-weight. The user will take care of the rendering, styling, handling page change and whatever.

I want it to take just 4 props:

  1. `totalPagesCount`: the number of total pages;
  2. `currentPage`: the current page number;
  3. `visiblePages`: the maximum number of pages that should be visible; defaulted to 5;
  4. `children`: the `renderProp` that will have as argument the data structure that describes the page numbers to show;

The `children` method will receive an array of objects as argument. Each object will represents a single page to show and will have these properties in it:

```
{
  number: integer,        // the actual page number
  isCurrent: boolean,     // true if number === currentPage
  isFirst: boolean,       // true if number === 1
  isLast: boolean         // true if number === totalPagesCount
}
```

At the end, this is my desired sample usage:

```js
<Paginator
  totalPagesCount={ 10 }
  currentPage={ 3 }
  visiblePages={ 5 }
>
  {
    pages => ...      // here the user can render his/her things
  }
</Paginator>
```

---

## Setup

Few months ago I discovered a tool I really like: `nwb` (https://github.com/insin/nwb)

It helps creating different kind of Javascript project, amongs them a React component ready to be published.
So, let's create the project and `cd` into it's directory:

```
$ nwb new react-component react-pagination-mini && cd $_

Creating a react-component project...
? Do you want to create an ES modules build for use by compatible bundlers? Yes
? Do you want to create a UMD build for global usage via <script> tag? No
  create .gitignore
  create .travis.yml
  create CONTRIBUTING.md
  create README.md
  create demo/src/index.js
  create nwb.config.js
  create package.json
  create src/index.js
  create tests/.eslintrc
  create tests/index-test.js
✔ Installing react and react-dom
✔ Initing Git repo
```

...and add the `prop-types` package:

```
$ npm install --save-dev prop-types
```

---

## First draft

Just prepare an empty component:

```js
// src/index.js

import React from 'react'

const Pager = props =>
  <div />

export default Pager
```

To be able to use the component the way exposed before, we need to make sure it has some requisites, and we ensure this writing some tests first.

Depending on what I am doing, I decide whether to hardly test the props a component receives. In this case, being a render-less component, I think that errors should be thrown if the props doesn't respond to certain requirements, because the component is completely useless without proper input.

The user will be in charge of placing an Error Boundary somewhere above this component or make sure that correct props values are given, or both.

```js
// tests/index.test.js

import expect from 'expect'
import React from 'react'
import { renderToStaticMarkup as render } from 'react-dom/server'

import Pager from 'src/'

describe('Pager', () => {

  // presence checks
  it('should throw errors if there is no `totalPagesCount` prop')
  it('should throw errors if there is no `currentPage` prop')
  it('should throw errors if there is no `visiblePages` prop')
  it('should throw errors if there is no `children` prop')

  // type checks
  it('should throw errors if `totalPagesCount` is not a number')
  it('should throw errors if `currentPage` is not a number')
  it('should throw errors if `visiblePages` is not a number')
  it('should throw errors if `children` is not a function')

  // value checks
  it('should throw errors if `totalPagesCount` is less than 1')
  it('should throw errors if `currentPage` is less than 1')
  it('should throw errors if `currentPage` is greater than `totalPagesCount`')
  it('should throw errors if `visiblePages` is less than 1')

})

```

Running our temporary tests we should get:

```
START:
  Pager
    ✖ should throw errors if there is no `totalPagesCount` prop (skipped)
    ✖ should throw errors if there is no `currentPage` prop (skipped)
    ✖ should throw errors if there is no `visiblePages` prop (skipped)
    ✖ should throw errors if there is no `children` prop (skipped)
    ✖ should throw errors if `totalPagesCount` is not a number (skipped)
    ✖ should throw errors if `currentPage` is not a number (skipped)
    ✖ should throw errors if `visiblePages` is not a number (skipped)
    ✖ should throw errors if `children` is not a function (skipped)
    ✖ should throw errors if `totalPagesCount` is less than 1 (skipped)
    ✖ should throw errors if `currentPage` is less than 1 (skipped)
    ✖ should throw errors if `currentPage` is greater than `totalPagesCount` (skipped)
    ✖ should throw errors if `visiblePages` is less than 1 (skipped)

Finished in 0.006 secs / 0 secs @ 18:54:54 GMT+0100

SUMMARY:
✔ 0 tests completed
ℹ 12 tests skipped
```

Perfect, we are ready to implement them.

### Implementing the tests

A presence test will just fail when a prop hasn't been given to the component:

```js
it('should throw errors if there is no `totalPagesCount` prop', () => {
  const rendered = () => render(
    <Pager currentPage={ 3 }
           visiblePages={ 5 }
           children={ () => {} }
    />
  )

  expect(rendered).toThrow()
})
```

In the other presence tests I just swapped the list of props in order to test them all.

---

## Deciding which pages to show

Let's figure out which are the rules to handle a window like the one in the image, with 5 pages.

To begin with, let's define some terms that can become useful along the way:

```
W = window size, the maximum number of visible pages
CP = current page
PB = pages before the current one, ideally
after = A = floor(W / 2)
```
