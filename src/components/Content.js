import React, { PureComponent } from 'react'
import Markdown from 'react-markdown'
import styled from 'styled-components'

import Spinner from 'components/Spinner'

const Section = styled.section `
  margin-top: 30px;

  p {
    margin-top: 0px;
  }
`

class Content extends PureComponent {

  state = {
    content: null,
    error: false
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.text())
      .then(response => this.setState({ content: response, error: false }))
      .catch(error => this.setState({ content: null, error: true }))
  }

  render() {
    const { content, error } = this.state
    if ( error ) return 'error'
    return (
      <Section>
        {
          content
          ? <Markdown source={ content } />
          : <Spinner />
        }
      </Section>
    )
  }

}

export default Content
