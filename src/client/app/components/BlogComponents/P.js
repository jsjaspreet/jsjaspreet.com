import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  text-rendering: optimizeLegibility;
  font-family: 'Merriweather', serif;
  font-weight: 300;
  line-height: 1.78em;
  word-wrap: break-word;
  color: hsla(0,0%,0%,0.9);
  margin-bottom: 1.78rem;
`;

class P extends PureComponent {
  render() {
    return (
      <StyledP>{this.props.children}</StyledP>
    );
  }
}

export default P;