import React from 'react'
import { Link as BaseLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

const style = css `
  color: #930EDF;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const StyledA = styled.a(style)
const StyledLink = styled(BaseLink)(style)

const isExternal = url =>
  url.startsWith('http')

const Link = ({ to, ...props }) =>
  isExternal(to)
    ? <StyledA href={ to } { ...props } />
    : <StyledLink to={ to } { ...props } />

export default Link
