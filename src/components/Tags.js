import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

const Ul = styled.ul `
  margin: 0px;
  padding: 0px;
`

const Tag = styled.li `
  display: inline-block;
  padding: 5px 7px;
  font-family: monospace;
  font-size: 0.8em;
  background: #EEEEEE;
  color: #888888;
  margin-right: 5px;
  border-radius: 5px;
  list-style-type: none;
`

const Tags = ({ tags }) => (
  tags.length > 0 &&
  <Ul>
    { tags.map(tag => <Tag key={ tag }>{ tag }</Tag>) }
  </Ul>
)

Tags.defaultProps = {
  tags: []
}

Tags.propTypes = {
  tags: t.arrayOf(String)
}

export default React.memo(Tags)
