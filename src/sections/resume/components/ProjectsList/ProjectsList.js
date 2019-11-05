import React from 'react'

import { Message } from 'ui'
import Preview from './Preview'

import { projects } from 'sections/resume/assets'

const EmptyList = () => (
  <Message icon="empty-set" text="no projects here" />
)

const List = ({ projects }) =>
  projects.map(project =>
    <Preview
      key={ project.slug }
      { ...project }
    />
  )

const ProjectsList = () =>
  projects.length === 0
    ? <EmptyList />
    : <List projects={ projects } />

export default ProjectsList
