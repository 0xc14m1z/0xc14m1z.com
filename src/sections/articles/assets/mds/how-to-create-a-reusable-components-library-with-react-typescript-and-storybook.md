Every now and then I find myself building components libraries with React for
projects that requires different applications but the same UI guidelines.

In previous projects I always used [nwb](https://github.com/insin/nwb/blob/master/docs/guides/ReactComponents.md#developing-react-components-and-libraries-with-nwb "Developing React components and libraries with nwb") because it's very easy to use and
fully featured.

In order to better understand what's behind a React component library and maybe
a package in general, I decided to try create one without using super convinient
tools like nwb and setup everything by myself.

This article is the result of tens of experiments and unprofitable paths I took
before having what seems to me a pretty straightforward resulting procedure.

I want my components library to be:

1. written in Typescript;
2. tested with Jest;
3. styled with styled-components;
4. previewed with Storybook;

Let's start.

## Creating the main project and test applications
