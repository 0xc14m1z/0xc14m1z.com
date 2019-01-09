import React from 'react'
import styled from 'styled-components'

import BaseLink from 'components/Link'
import { HomeIcon, AboutIcon, GitHubIcon } from 'components/Icon'

const Container = styled.footer `
  margin-top: 50px;
  border-top: 1px solid #DDDDDD;
  padding: 50px 20px 0px 20px;
  display: flex;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`

const Text = styled.p `
  margin-top: 0px;
  font-size: 0.9em;
  color: #888888;
  flex-grow: 1;
  text-align: right;

  @media screen and (max-width: 640px) {
    text-align: left;
  }
`

const Link = styled(BaseLink) `
  margin-right: 20px;
  margin-bottom: 10px;
`

const Footer = () => (
  <Container>
    <Link to="/">
      <HomeIcon /> Home
    </Link>
    <Link to="/about">
      <AboutIcon /> About
    </Link>
    <Link to="https://github.com/0xc14m1z">
      <GitHubIcon /> GitHub
    </Link>
    <Text>© { new Date().getFullYear() }. All rights reserved.</Text>
  </Container>
)

export default React.memo(Footer)
