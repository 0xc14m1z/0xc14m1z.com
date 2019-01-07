import React from 'react'
import styled from 'styled-components'

import Page from 'components/Page'
import BaseMessage from 'components/Message'

const Message = styled(BaseMessage) `
  margin-top: 50px;
`

const NotFoundPage = () => (
  <Page title="Not found">
    <Message icon="frown-open" text="Page not found..." />
  </Page>
)

export default React.memo(NotFoundPage)
