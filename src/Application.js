import React, { Suspense } from 'react'

import { GlobalStyle, Spinner } from 'ui'
import { Router } from 'routing'

const Application = () => (
  <>
    <GlobalStyle />
    <Suspense fallback={ <Spinner /> }>
      <Router />
    </Suspense>
  </>
)

export default Application
