import React from 'react'
import styled from 'styled-components'

const Container = styled.p `
  margin-top: 50px;
  border: 2px solid #ffeb3b;
  text-align: center;
  border-radius: 5px;
  background: #fff9c4;
  padding: 50px;
  @media screen and (max-width: 640px) {
    padding: 25px;
  }
`

const WorkInProgressBanner = () => (
  <Container>
    Does this article seem incomplete? Because it is it!<br />
    I am still working on it, come back in few days, there might be new content.
  </Container>
)

export default React.memo(WorkInProgressBanner)
