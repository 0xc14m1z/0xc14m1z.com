import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

import Header from 'components/Header'

const Container = styled.div `
  max-width: 768px;
  margin: auto;
`

const Main = styled.main `
  padding: 0px 20px;
`

const Page = ({ children }) => (
  <Container>
    <Header />
    <Main>
      { children }
    </Main>
  </Container>
)

Page.defaultProps = {
  title: '0xc14m1z notes'
}

Page.propTypes = {
  title: t.string,
  children: t.node
}

export default React.memo(Page)
