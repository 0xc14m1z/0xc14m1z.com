import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

import { H2 as BaseH2, Link, Tags } from 'ui'
import WorkInProgressBadge from '../WorkInProgressBadge'

const Container = styled.div `
  margin: 0px;

  &:after {
    display: block;
    margin: 20px 0px;
    content: "•";
    color: #DDDDDD;
    text-align: center;
  }
`

const WIP = styled(WorkInProgressBadge) `
  margin-top: 10px;
  & + h2 { margin-top: 5px; }
`

const H2 = styled(BaseH2) `
  margin: 10px 0px;
`

const Intro = styled.p `
  margin: 0px 0px 10px 0px;
  color: black;
  font-size: 1.15em;
`

const Preview = ({ slug, title, intro, tags, isWorkInProgress }) => (
  <Container>
    { isWorkInProgress && <WIP /> }
    <H2><Link to={ slug }>{ title }</Link></H2>
    <Intro>{ intro }</Intro>
    <Tags tags={ tags } />
  </Container>
)

Preview.propTypes = {
  slug: t.string.isRequired,
  title: t.string.isRequired,
  intro: t.string.isRequired,
  tags: t.arrayOf(String)
}

export default Preview
