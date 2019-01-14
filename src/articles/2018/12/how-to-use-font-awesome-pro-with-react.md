Everytime I need to FontAwesome Pro in one of my React projects, I have to search the exact procedure to do it. Every. Time.

I need it one time per project and I always forget how to do it, so, this few lines are a reminder for myself primarily.

First thing, having bought the Pro version, you probably need some icon or some style available only after a payment. For me, for instance, the need is usually the light version.

As an outline, the procedure is:

1. add an `.npmrc` file with the private npm registry of FontAwesome;
2. install necessary packages;
3. create a library of needed icons;
4. create a component that wraps the usage of the _raw_ FontAwesome component;

---

## 1. add FontAwesome's private npm registry

Create an `.npmrc` file in the root of your project and paste in:

```
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken={YOUR_PRIVATE_TOKEN}
```

In place of `{YOUR_PRIVATE_TOKEN}` you should put the token you can find in your profile page.

Due to the private nature of the token, it would be better if you add this file to your `.gitignore` one.

## 2. required packages

There are at least three packages that needs to be installed:

1. the one that contains the FontAwesome component;
2. the one that exports the SVG features;
3. the one that contains the icons that we want;

To get the first, just type:

```
npm install --save @fortawesome/react-fontawesome
```

In order to optimize the final bundle size, it's important to use the SVG version of the icons, so that we can cherry pick them from the package. I think that nobody wants in the bundle five thousands icons.

However, to get the second package, install it with:

```
npm install --save @fortawesome/fontawesome-svg-core
```

The last package that you need is the one with the actual icons. As I said before, I usually use the _light_ version, thereby I install:

```
npm install --save @fortawesome/pro-light-svg-icons
```

With these packages, we are good to go.

## 3. create a library

I hit my head on the table to get this point at the beginning.

Basically, a library is the list of picked icons from the huge number available.

This website for instance, uses just two icons, the home one in the upper left corner and the circled _i_ in the upper right corner.

To create a library for those icons, we need to:

1. import the proper method exported from the `@fortawesome/fontawesome-svg-core` package;
2. import the icons that we want from the proper package;
3. add these icons to the library;

```js
import { library } from '@fortawesome/fontawesome-svg-core'

import {
	faHome,
	faInfoCircle
} from '@fortawesome/pro-light-svg-icons'

library.add(
	faHome,
	faInfoCircle
)
```

## 4. create a component around FontAwesomeIcon

The `FontAwesomeIcon` component exported from the `@fortawesome/react-fontawesome` allows the user to use icons in few ways:

```jsx
<FontAwesomeIcon icon="home" />
<FontAwesomeIcon icon={ faHome } />
<FontAwesomeIcon icon={['fal', 'home']} />
```

It also has support for other useful properties like `size` or `transform` and others.

The thing I feel missing, only from the point of view of my projects, is that it doesn't warn if the icon hasn't been imported into the library. In this case, nothing appears, sort of a `null` render.

For this reason, I like to have a wrapper component alongside the library definition that adds this warning to the user using the `prop-types` package.

```jsx
import React from 'react'
import t from 'prop-types'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
	faHome,
	faInfoCircle
} from '@fortawesome/pro-light-svg-icons'

library.add(
	faHome,
	faInfoCircle
)

const Icon = props =>
	<FontAwesomeIcon { ...props } />

Icon.propTypes = {
	icon: t.oneOf([
		'home',
		'info-circle'
	])
}

export default Icon
```

---

At the end, it's not too difficult to remember, but I just don't.
