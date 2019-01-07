import React from 'react'
import t from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faHome,
  faInfoCircle,
  faEmptySet,
  faFrownOpen
} from '@fortawesome/pro-light-svg-icons'

library.add(
  faHome,
  faInfoCircle,
  faEmptySet,
  faFrownOpen
)

const Icon = ({ name, ...props }) => (
  <FontAwesomeIcon icon={['fal', name]} { ...props } />
)

Icon.propTypes = {
  name: t.oneOf([
    'home',
    'info-circle',
    'empty-set',
    'frown-open'
  ]).isRequired
}

export default React.memo(Icon)
