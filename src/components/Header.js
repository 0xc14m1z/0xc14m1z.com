import React from 'react'
import styled from 'styled-components'

const Container = styled.header `
  position: sticky;
  top: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: space-between;
  border-bottom: 1px solid #DDDDDD;
  background: white;
`

const Title = styled.span `
  padding: 10px 0px;
  color: black;
  font-size: 1em;
  font-weight: bold;
`

const Header = () => (
  <Container>
    <Title>0xc14m1z notes</Title>
  </Container>
)

export default React.memo(Header)
