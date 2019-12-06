import React from 'react'
import styled from 'styled-components'

import { Page, H1, H2 as BaseH2 } from 'ui'
import { ProjectsList } from 'sections/resume/components'

const H2 = styled(BaseH2) `
  margin-top: 50px;
`

const ResumePage = () => (
  <Page title="Résumé">
    <H1>Luca Ramundo</H1>

    <p>
      I'm an experienced frontend developer with more than years of full stack
      projects behind me as a freelance.
    </p>
    <p>
      I worked with lots of different languages and frameworks, but I fall in
      love with React ecosystem since late 2015. I am familiar with
      Javascript/ES6, React, Redux and related technologies.
    </p>
    <p>
      Keen to functional programming, my code is clean, understandable,
      maintainable and robust.
    </p>
    <p>
      I'm eager to constantly improve my skills using all learning platforms
      available. <br />
      Currently I am interested in deepen my Javascript knowledge, getting into
      Typescript and studying functional programming languages like Elm for the
      frontend and Elixir for the backend.
    </p>

    <H2>Latest projects</H2>

    <ProjectsList />

  </Page>
)

export default ResumePage
