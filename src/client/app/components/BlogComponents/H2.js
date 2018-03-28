import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  margin-bottom: 1.78rem;
  margin-top: 3.56rem;
  color: hsla(0,0%,0%,0.9);
  font-family: Open Sans,sans-serif;
  font-weight: 700;
  text-rendering: optimizeLegibility;
  font-size: 1.51572rem;
  line-height: 1.78rem;
`;

class H2 extends PureComponent {
  render() {
    return (
      <StyledH2>{this.props.children}</StyledH2>
    );
  }
}

export default H2;