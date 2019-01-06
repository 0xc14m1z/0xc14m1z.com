import React from 'react'
import styled from 'styled-components'

import FormattedDate from 'components/FormattedDate'

const Container = styled.p `
  margin: 0px;
  font-size: 0.9em;
  color: #888888;
`

const Date = ({ date }) => (
  <Container>
    <FormattedDate date={ date } />
  </Container>
)

export default React.memo(Date)
