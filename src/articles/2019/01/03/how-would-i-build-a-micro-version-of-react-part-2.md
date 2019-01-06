I think that a framework like React might work this way:

  1. plain Javascript objects representing each element of the application are made transpiling the JSX; the nesting of these POJO’s is the famous Virtual DOM.
  2. the virtual dom gets rendered on screen and kept for later use (diffing); in this phase ...
