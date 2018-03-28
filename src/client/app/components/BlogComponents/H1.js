import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  margin-top: 3.56rem;
  margin-bottom: 1.78rem;
  color: hsla(0,0%,0%,0.9);
  font-family: Open Sans,sans-serif;
  font-weight: 700;
  text-rendering: optimizeLegibility;
  font-size: 2.2974rem;
  line-height: 2.67rem;
  letter-spacing: -2px;
`;

class H1 extends PureComponent {
  render() {
    return (
      <StyledH1>{this.props.children}</StyledH1>
    );
  }
}

export default H1;