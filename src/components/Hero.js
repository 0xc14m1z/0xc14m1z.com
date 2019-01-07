import React from 'react'
import styled from 'styled-components'

import photo from 'assets/images/photo.jpg'

import Link from 'components/Link'
import BaseH1 from 'components/H1'
import BaseH2 from 'components/H2'

const Container = styled.div `
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:after {
    display: block;
    margin: 20px 0px 50px 0px;
    content: "•";
    color: #DDDDDD;
    text-align: center;
  }
`

const Photo = styled.img `
  width: 72px;
  height: 72px;
  border-radius: 1000px;
  margin-bottom: 20px;
`

const H1 = styled(BaseH1) `
  margin: 0px;
  font-size: 1em;
`

const H2 = styled(BaseH2) `
  margin: 0px;
  font-size: 1em;
  font-weight: normal;
  color: black;
  text-align: center;
`

const Hero = () => (
  <Container>
    <Link to="/about"><Photo src={ photo } alt="Luca Ramundo" /></Link>
    <H1>0xc14m1z notes</H1>
    <H2>I do note and try lots of things. Wanna avoid to forget them.</H2>
  </Container>
)

export default React.memo(Hero)
