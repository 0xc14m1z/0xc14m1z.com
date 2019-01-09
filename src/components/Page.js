import React from 'react'
import Helmet from 'react-helmet'
import t from 'prop-types'
import styled from 'styled-components'

import Header from 'components/Header'
import Footer from 'components/Footer'

const Container = styled.div `
  max-width: 768px;
  margin: auto;
`

const Main = styled.main `
  padding: 0px 20px;
`

const Page = ({ title, description, children }) => (
  <Container>
    <Helmet
      defaultTitle="0xc14m1z notes"
      titleTemplate="%s | 0xc14m1z notes"
    >
      <title>{ title }</title>
      { description && <meta name="description" content={ description } /> }
    </Helmet>
    <Header />
    <Main>
      { children }
    </Main>
    <Footer />
  </Container>
)

Page.propTypes = {
  title: t.string,
  children: t.node
}

export default React.memo(Page)
