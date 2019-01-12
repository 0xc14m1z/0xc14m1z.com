import React from 'react'
import styled from 'styled-components'

const Container = styled.span `
  display: inline-block;
  font-size: 10px;
  padding: 4px 7px 2px;
  background: #ffeb3b;
  color: 888888;
  border-radius: 3px;
  text-transform: uppercase;
`

const WorkInProgressBadge = ({ className }) => (
  <Container className={ className }>
    Work in progress
  </Container>
)

export default React.memo(WorkInProgressBadge)
