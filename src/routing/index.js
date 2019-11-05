import { lazy } from 'react'

import * as Paths from './paths'
import * as Pages from './pages'

const Router = lazy(() => import('./Router'))

export {
  Paths,
  Pages,
  Router
}
