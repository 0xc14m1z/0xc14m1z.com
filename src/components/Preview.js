import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

import Date from 'components/Date'
import FormattedDate from 'components/FormattedDate'
import { default as BaseH2 } from 'components/H2'
import Link from 'components/Link'
import Intro from 'components/Intro'

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

const H2 = styled(BaseH2) `
  margin: 10px 0px;
`

const Preview = ({ slug, date, title, intro, tags }) => (
  <Container>
    <Date><FormattedDate date={ date } /></Date>
    <H2><Link to={ slug }>{ title }</Link></H2>
    <Intro>{ intro }</Intro>
  </Container>
)

Preview.propTypes = {
  slug: t.string.isRequired,
  date: t.object.isRequired,
  title: t.string.isRequired,
  intro: t.string.isRequired,
  tags: t.arrayOf(String)
}

export default React.memo(Preview)
