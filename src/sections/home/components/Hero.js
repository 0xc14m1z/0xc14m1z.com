import React from 'react'
import styled from 'styled-components'

import photo from 'sections/home/assets/images/photo.jpg'

import { H1 as BaseH1, H2 as BaseH2, Link as BaseLink } from 'ui'
import { InfoIcon } from 'ui/Icon'

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
  border-radius: 72px;
  margin-bottom: 20px;
`

const H1 = styled(BaseH1) `
  margin: 0px;
  font-size: 1.25em;
`

const H2 = styled(BaseH2) `
  margin: 10px 0px;
  max-width: 400px;
  font-size: 1em;
  font-weight: normal;
  color: black;
  text-align: center;
`

const Link = styled(BaseLink) `
  [data-icon] {
    margin-right: 5px;
  }
`

const Hero = () => (
  <Container>
    <Link to="/resume">
      <Photo src={ photo } alt="Luca Ramundo" />
    </Link>
    <H1>Luca Ramundo</H1>
    <H2>
      I'm an experienced Frontend Developer with more than ten years of full
      stack projects behind me as a freelance.
    </H2>
    <Link to="/resume">
      <InfoIcon />Résumé
    </Link>
  </Container>
)

export default Hero
