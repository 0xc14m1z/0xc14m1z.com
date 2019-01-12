import React from 'react'
import styled from 'styled-components'

import Date from 'components/Date'
import { default as BaseWIP } from 'components/WorkInProgressBadge'
import H1 from 'components/H1'
import Tags from 'components/Tags'
import Content from 'components/Content'

const Container = styled.article ``

const WIP = styled(BaseWIP) `
  margin-top: 25px;
  & + h1 { margin-top: 5px; }
`

const Article = ({ date, title, content, tags, isWorkInProgress }) => (
  <Container>
    <Date date={ date } />
    { isWorkInProgress && <WIP /> }
    <H1>{ title }</H1>
    <Tags tags={ tags } />
    <Content url={ content } />
  </Container>
)

export default React.memo(Article)
