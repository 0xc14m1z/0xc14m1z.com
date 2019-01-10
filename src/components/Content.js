import React, { PureComponent } from 'react'
import Markdown from 'react-markdown'
import styled from 'styled-components'

import Spinner from 'components/Spinner'

const Section = styled.section `
  margin-top: 30px;

  p {
    margin-top: 0px;
  }

  p, li, code {
    line-height: 1.5;
  }

  img {
    max-width: 100%;
    display: block;
    margin: 20px 0px;
  }

  blockquote {
    position: relative;
    margin-left: 2rem;
    font-family: 'Georgia';
    font-style: italic;
    font-size: 1.5em;

    &:before {
      position: absolute;
      top: -1rem;
      left: -3rem;
      content: '‟';
      font-size: 3em;
      color: #930EDF;
      opacity: 0.25;
    }
  }

  pre, code {
    padding: 5px;
    border-radius: 5px;
    background: #EEEEEE;
  }

  pre {
    padding: 10px;
    margin: 0px -10px 16px -10px;
    overflow-x: auto;
  }

  pre code {
    background: none;
    padding: 0px;
    margin: 0px;
  }

  hr {
    border: none;
    margin: 0px;

    &:after {
      display: block;
      margin: 20px 0px;
      content: "•";
      color: #DDDDDD;
      text-align: center;
    }
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
