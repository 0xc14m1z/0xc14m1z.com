I am working on the React backoffice application rewrite for an Opera website and, as common, I need to paginate the results I get from the backend.

Let's start with the result:

![Final result](/images/building-a-react-paginator-with-a-predefined-number-of-visible-pages/final-result.png)

My requirements are quite standard:

> we need show a "window" of N pages, some before and some after the current one, which is supposed to be at the center.

I have to admit that, at first, I've underestimated the problem. Only when I took pencil and paper to outline a schema of the behaviour things started to become messy as they are.
