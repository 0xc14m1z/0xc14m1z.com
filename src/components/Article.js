import React from 'react'
import styled from 'styled-components'

import Date from 'components/Date'
import H1 from 'components/H1'
import Tags from 'components/Tags'
import Content from 'components/Content'

const Container = styled.article ``

const Article = ({ date, title, content, tags }) => (
  <Container>
    <Date date={ date } />
    <H1>{ title }</H1>
    <Tags tags={ tags } />
    <Content url={ content } />
  </Container>
)

export default React.memo(Article)
