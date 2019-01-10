import React from 'react'

import Page from 'components/Page'
import H1 from 'components/H1'

const AboutPage = () => (
  <Page title="About me">
    <H1>Luca Ramundo</H1>

    <p>
      I'm an experienced Frontend Developer with almost ten years of full stack projects behind me as a freelance.
    </p>
    <p>
      I worked with lots of different languages and frameworks over the course of the years, but I am settling with the React ecosystem since late 2015. I have extensive knowledge of Javascript/ES6, React, Redux and related technologies.
    </p>
    <p>
      Keen to functional programming, my code is clean, understandable, maintainable and robust.
    </p>
    <p>
      I’m eager to constantly improve my skills using all the learning platforms available. Currently I am interested in Elm, ReasonML and Elixir.
    </p>
  </Page>
)

export default React.memo(AboutPage)
