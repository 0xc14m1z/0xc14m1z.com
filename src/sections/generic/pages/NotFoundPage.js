import React from 'react'
import styled from 'styled-components'

import { Page, Message as BaseMessage } from 'ui'

const Message = styled(BaseMessage) `
  margin-top: 50px;
`

const NotFoundPage = () => (
  <Page title="Not found">
    <Message icon={ ['fal', 'frown-open'] } text="Page not found..." />
  </Page>
)

export default NotFoundPage
