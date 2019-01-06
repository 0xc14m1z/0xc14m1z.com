import React from 'react'
import t from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'

import { faHome, faInfoCircle } from '@fortawesome/pro-light-svg-icons'

library.add(
  faHome, faInfoCircle
)

const Icon = ({ name }) => (
  <FontAwesomeIcon icon={['fal', name]} />
)

Icon.propTypes = {
  name: t.string.isRequired
}

export default React.memo(Icon)
