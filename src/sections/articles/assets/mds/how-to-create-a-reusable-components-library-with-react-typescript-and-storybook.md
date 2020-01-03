Every now and then I find myself building components libraries with React for
projects that requires different applications but the same UI guidelines.

In previous projects I always used [nwb](https://github.com/insin/nwb/blob/master/docs/guides/ReactComponents.md#developing-react-components-and-libraries-with-nwb "Developing React components and libraries with nwb")
because it's very easy to use and fully featured.

In order to better understand what's behind a React component library and maybe
a package in general, I decided to try create one without using super convinient
tools like nwb and setup everything by myself.

This article is the result of tens of experiments and unprofitable paths I took,
before having what seems to me a pretty straightforward resulting procedure.

I want my components library to be:

1. written in Typescript;
2. tested with Jest;
3. previewed with Storybook;
4. styled with styled-components;

Let's start.

---

## Creating the main project and test applications

The first thing to do is, of course, create the folder and initialize the package:

```bash
mkdir 0xc14m1z-ui && cd "$_"
npm init
```

Answer the questions asked to prepare your `package.json` file.

I will skip all the committing in this article but, you know, do it.

---

Our library should be used and properly work both with Javascript and Typescript
projects, so at the same folder level as the library, I am going to create two
Create React App projects where I'll install the library into:

```bash
cd .. # jump one step back from the library folder
npx create-react-app ui-demo-js
npx create-react-app ui-demo-ts --typescript
```

Here I use `npx` in order to always use the latest version of the
`create-react-app` package without the hassle of installing it and keeping it
updated.

### First installation test

Now that we have all the very basic setup to start working, let's export a fake
component to check that we can install the library and use what it exports.

Let's move to the library folder and add an `index.js` file in the root of
project, it should contain something like:

```javascript
// 0xc14m1z-ui/index.js

const Button = props =>
  'button'

export default Button
```

We need to export just a string because if we use jsx, we would have needed some
transpilation phase and that's not the point of this early test.

Now, let's prepare the package to be used in the other two test applications:

```bash
npm pack
```

The output should be something like:

```bash
npm notice
npm notice 📦  0xc14m1z-ui@0.1.0
npm notice === Tarball Contents ===
npm notice 56B  index.js
npm notice 343B package.json
npm notice === Tarball Details ===
npm notice name:          0xc14m1z-ui
npm notice version:       0.1.0
npm notice filename:      0xc14m1z-ui-0.1.0.tgz
npm notice package size:  386 B
npm notice unpacked size: 399 B
npm notice shasum:        d088d241a2cb44f4dff6b633393a2bd150792222
npm notice integrity:     sha512-Rmg9ht7WDJVnY[...]VsrO9Kres71Kw==
npm notice total files:   2
npm notice
0xc14m1z-ui-0.1.0.tgz
```

Now, move to the demo application in Javascript, add to the `package.json`
the library package as dependency:

```javascript
// ui-demo-js/package.json

"dependencies": {
  // ...
  "ui": "file:../0xc14m1z-ui/0xc14m1z-ui-0.1.0.tgz"
  // ...
}
```

For practical reasons, add a new script on the application prestart that
removes the current installation of the library and reinstall it in order to
always have the latest version.

```javascript
// ui-demo-js/package.json

"scripts": {
  // ...
  "prestart": "rm -rf node_modules/ui package-lock.json && npm install"
  // ...
}
```

Replace the `src/App.js` content and just render the fake component we just
created:

```javascript
// ui-demo-js/src/App.js

import React from 'react'
import Button from 'ui'

const App = () => (
  <Button />
)

export default App
```

Running the application at this point, you should just just see the string
"button" in the top left corner of the page.

Why aren't we trying in the Typescript demo application too? Because by default
Typescript will look for the type definitions, but we haven't defined any yet,
being a test.

---

## Add Typescript

Our super simple package seems to work. It's time to start going pro.

Add the `typescript` package as dev dependency and initialize the configuration
file:

```
npm install --save-dev typescript
npx tsc --init
```

There should be a `tsconfig.json` file in the root of the library folder which
contains a default configuration for the compiler and a ton of comments about
every possible option and its default value. However, [here][https://www.typescriptlang.org/docs/handbook/tsconfig-json.html]
is the the reference from the documentation.

We can


### The very first component

At the moment we only have a folder with a `package.json` file.
We need to first add React as a dev dependency.

```bash
npm install --save-dev react
```




## Make it testable


## Preview it with Storybook


## Add some styling
