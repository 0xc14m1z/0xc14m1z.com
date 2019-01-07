import React from 'react'
import styled from 'styled-components'

import BaseIcon from 'components/Icon'

const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Icon = styled(BaseIcon) `
  font-size: 5em;
`

const Text = styled.p `
  color: #930EDF;
  font-size: 1.5em;
  font-weight: bold;
  text-transform: lowercase;
`

const Message = ({ icon, text, ...props }) => (
  <Container { ...props }>
    <Icon name={ icon } />
    <Text>{ text }</Text>
  </Container>
)

export default React.memo(Message)
