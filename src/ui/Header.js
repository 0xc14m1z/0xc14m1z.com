import React from 'react'
import styled from 'styled-components'

import Link from './Link'
import { HomeIcon, InfoIcon } from './Icon'

const Container = styled.header `
  z-index: 1;
  position: sticky;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 50px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #DDDDDD;
  background: white;
`

const Title = styled.span `
  color: black;
  font-size: 1em;
  font-weight: bold;
`

const Home = () => (
  <Link to="/" title="Home">
    <HomeIcon />
  </Link>
)

const Resume = () => (
  <Link to="/resume" title="Résumé">
    <InfoIcon />
  </Link>
)

const Header = () => (
  <Container>
    <Home />
    <Title>0xc14m1z</Title>
    <Resume />
  </Container>
)

export default Header
