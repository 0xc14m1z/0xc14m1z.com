You may have noticed that after declaring an integers array like this:

```
const array = [2, 6, 1, 3, 8, 10, 2, 7, 4, 9]
```

if you try to sort it using the `sort()` method, you don’t get the expected result of:

```
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

but instead this:

```
[1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
```

The first thing to be aware of, is that `sort()` modify your array in-place, so if you need to keep the original order of things, pay attention to use `splice()` and then `sort()` to have a new array back after sorting (technically, after the `splice()`).

Getting back to the weird sorting, the problem is that Javascript converts items to strings and only then compare them by their Unicode codepoints. That’s why 10 comes before 2, because "10" comes before "2".

How do I sort numbers then?
The `sort()` method takes one optional parameter, which is a custom compare function. Giving the custom compare function to `sort()`, avoid the items of the array to be converted in strings.

This custom compare function then takes two arguments that are two items in the array. It has to return:

  - a negative number if the first argument should be placed before the second;
  - a positive number if the second argument should be placed before the first;
  - zero, if they’re equal.

We can achieve all three possible results with a single operation. The arithmetic difference between the two arguments, in fact:

- if the first operand is smaller than the second, subtracting the latter from the first, we’ll have a negative number;
- on the contrary, if the first operand is greater then the second, substracting them, we’ll have positive number;
- when they’re equal, the difference will be zero.

Using a ES6 lambda function, the compare function could be this easy:

```
const cmp = (fst, snd) => fst - snd
```

So, in the end, an array of integers should be sort using a custom compare function:

```
const array = [2, 6, 1, 3, 8, 10, 2, 7, 4, 9]
const cmp = (fst, snd) => fst - snd
const sorted = array.splice().sort(cmp)

// sorted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

For more accurate information about all of this, check out the MDN documentation here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
