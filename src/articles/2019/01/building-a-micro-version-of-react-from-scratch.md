This little experimental project has come to my mind during a vacation in Costa Rica. I was a bit struggling without almost any internet connection (accordingly to fast.com it was of about 800 bytes per second), and during a very bad weather moment I asked myself:

> how would I have written something like React?

I felt quite comfortable answering myself with general architecture and steps but I also wanted to try everything out. I have no idea at all whether this experiment will ever finish, but I am sure it will be very educational.

To add a bit of challenge in this (just because I have no idea of what I am doing), I’d like to implement everything in a "as much functional" possible way.

---

## General behaviour

I think that a framework like React might work this way:

  1. plain Javascript objects representing each element of the application are made transpiling the JSX; the nesting of these POJO’s is the famous Virtual DOM.
  2. the virtual dom gets rendered on screen and kept for later use (diffing); in this phase ...
