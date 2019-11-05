import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

import { Tags } from 'ui'

const Container = styled.div `
  margin: 0px;

  &:after {
    display: block;
    margin: 20px 0px;
    content: "•";
    color: #DDDDDD;
    text-align: center;
  }
`

const Period = styled.span ``

const Status = styled.span `
  margin-left: 10px;
  display: inline-block;
  color: #888888;
`

const PrivateApplication = styled.span.attrs({ children: 'private application' }) `
  color: #888888;
  &:before {
    content: ", ";
  }
`

const Role = styled.h3 `
  margin: 5px 0px;
`

const ClientName = styled.p `
  margin-top: 0px;
`

const ClientDescription = styled.p `
  color: #888888;
`

const Description = ({ lines }) =>
  lines.map((line, index) => <p key={ index }>{ line }</p>)

const Preview = ({
  slug,
  period,
  status,
  isPrivate,
  role,
  client,
  description,
  tags
}) => (
  <Container>
    <Period>{ period }</Period>
    { status && <Status>{ status }</Status> }
    { isPrivate && <PrivateApplication /> }
    <Role>{ role }</Role>
    <ClientName>{ client.name }</ClientName>
    <ClientDescription>{ client.description }</ClientDescription>
    <Description lines={ description } />
    <Tags tags={ tags } />
  </Container>
)

Preview.propTypes = {
  slug: t.string.isRequired,
  period: t.string.isRequired,
  status: t.string,
  isPrivate:   t.bool.isRequired,
  role: t.string.isRequired,
  client: t.shape({
    name: t.string.isRequired,
    description: t.string.isRequired
  }),
  description: t.arrayOf(t.string),
  tags: t.arrayOf(t.string)
}

export default Preview
