import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faHome,
  faInfoCircle,
  faEmptySet,
  faFrownOpen,
} from '@fortawesome/pro-light-svg-icons'

import {
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faHome,
  faInfoCircle,
  faEmptySet,
  faFrownOpen,
  faGithub
)

const Icon = ({ name, ...props }) => (
  <FontAwesomeIcon icon={ name } { ...props } />
)

export default React.memo(Icon)

export const HomeIcon = props =>
  <Icon name={[ 'fal', 'home' ]} { ...props } />

export const AboutIcon = props =>
  <Icon name={[ 'fal', 'info-circle' ]} { ...props } />

export const GitHubIcon = props =>
  <Icon name={[ 'fab', 'github' ]} { ...props } />

export const EmptySetIcon = props =>
  <Icon name={[ 'fal', 'empty-set' ]} { ...props } />

export const SadIcon = props =>
  <Icon name={[ 'fal', 'frown-open' ]} { ...props } />
