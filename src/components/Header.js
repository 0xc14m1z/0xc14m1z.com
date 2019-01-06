import React from 'react'
import styled from 'styled-components'

import Link from 'components/Link'
import Icon from 'components/Icon'

const Container = styled.header `
  position: sticky;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 40px;
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
  <Link to="/"><Icon name="home" /></Link>
)

const About = () => (
  <Link to="/about"><Icon name="info-circle" /></Link>
)

const Header = () => (
  <Container>
    <Home />
    <Title>0xc14m1z notes</Title>
    <About />
  </Container>
)

export default React.memo(Header)
