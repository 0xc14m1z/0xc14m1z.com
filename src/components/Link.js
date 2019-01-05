import React from 'react'
import { Link as BaseLink } from 'react-router-dom'
import styled from 'styled-components'

const Link = styled(BaseLink) `
  color: #930EDF;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export default React.memo(Link)
