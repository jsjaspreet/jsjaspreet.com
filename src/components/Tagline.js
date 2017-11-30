import React from 'react'
import FitText from 'react-fittext'
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

const Tagline = () => (
  <div style={{ display: 'flex', marginLeft: 12 }}>
    <FitText maxFontSize={100}>
      <h1 style={{wordSpacing: '0.2em'}}>
        I build dope software&nbsp;<BlinkingSpan>_</BlinkingSpan>
      </h1>
    </FitText>
  </div>
)

export default Tagline
