import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

const Container = styled.div `
  max-width: 768px;
  box-sizing: border-box;
  margin: auto;
  padding: 0px 20px;
`

const Page = ({ children }) => (
  <Container>
    { children }
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
