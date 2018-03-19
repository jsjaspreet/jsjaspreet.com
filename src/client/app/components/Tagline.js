import React from 'react'
import styled, { keyframes } from 'styled-components'

const Blink = keyframes`
  0% {
      opacity: 0;
  }
  40% {
      opacity: 0;
  }
  50% {
      opacity: 1;
  }
  90% {
      opacity: 1;
  }
  100% {
      opacity: 0;
  }
`

const BlinkingSpan = styled.span`
 animation: ${Blink} 1s infinite;
`
const AlignedH1 = styled.h1`
  word-spacing: 0.2em;
  font-size: 60px;
  background: black;
  font-family: 'Roboto Mono', monospace;
  color: lawngreen;
  padding: 10px;
  margin-bottom: 22px;
  align-self: center;
`

const Tagline = () => (
  <AlignedH1>
    I build dope software&nbsp;<BlinkingSpan>_</BlinkingSpan>
  </AlignedH1>
)

export default Tagline
