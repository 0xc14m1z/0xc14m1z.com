import React from 'react'
import styled from 'styled-components'

import { H1, Tags } from 'ui'
import WorkInProgressBadge from '../WorkInProgressBadge'

import Content from './Content'
import WorkInProgressBanner from './WorkInProgressBanner'

const Container = styled.article ``

const WIP = styled(WorkInProgressBadge) `
  & + h1 { margin-top: 5px; }
`

const Article = ({ title, content, tags, isWorkInProgress }) => (
  <Container>
    { isWorkInProgress && <WIP /> }
    <H1>{ title }</H1>
    <Tags tags={ tags } />
    <Content url={ content } />
    { isWorkInProgress && <WorkInProgressBanner /> }
  </Container>
)

export default Article
