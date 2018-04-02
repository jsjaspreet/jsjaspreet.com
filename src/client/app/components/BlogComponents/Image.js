import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  padding-top: 1.2em;
  width: 100%;
  padding-bottom: 1.2em;
`;

class Image extends PureComponent {
  render() {
    return (
      <StyledImg src={this.props.src}/>
    );
  }
}

export default Image;
