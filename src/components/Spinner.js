import React from 'react'
import styled, { keyframes } from 'styled-components'

const animation = keyframes `
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 58px;
    height: 58px;
    opacity: 0;
  }
`

const Pulse = styled.div `
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;

  &:before, &:after {
    display: block;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border: 3px solid #930EDF;
    opacity: 1;
    border-radius: 50%;
    animation: ${ animation } 1250ms cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  &:after {
    animation-delay: -1000ms;
  }
`

const Container = styled.div `
  display: flex;
  justify-content: center;
`

const Spinner = () => (
  <Container>
    <Pulse />
  </Container>
)

export default React.memo(Spinner)
