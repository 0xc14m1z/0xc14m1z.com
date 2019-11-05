import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

import { H2 as BaseH2, Link, Tags } from 'ui'

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

const Period = styled.span `
  font-weight: bold;
`

const Status = styled.span `
  color: #888888;
  &:before {
    margin-left: 10px;
    margin-right: 10px;
    content: "•";
    color: #DDDDDD;
  }
`

const PrivateApplication = styled.span.attrs({ children: 'private application' }) `
  color: #888888;
  &:before {
    content: ", ";
  }
`

const ClientName = styled.p `
  font-size: 0.85em;
`

const ClientDescription = styled.p `
  color: #888888;
`

const Description = ({ lines }) =>
  lines.map(line => <p>{ line }</p>)

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
    <p>
      <Period>{ period }</Period>
      { status && <Status>{ status }</Status> }
      { isPrivate && <PrivateApplication /> }
    </p>
    <h3>{ role }</h3>
    <ClientName>{ client.name }</ClientName>
    <ClientDescription>{ client.description }</ClientDescription>
    <Description lines={ description } />
    <Tags tags={ tags } />
  </Container>
)

// Preview.propTypes = {
//   slug: t.string.isRequired,
//   title: t.string.isRequired,
//   intro: t.string.isRequired,
//   tags: t.arrayOf(String)
// }

export default Preview
