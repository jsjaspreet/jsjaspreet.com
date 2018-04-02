import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledCode = styled.code`
    background-color: hsla(0,0%,0%,0.04);
    border-radius: 3px;
    font-family: 'Source Code Pro', monospace;
    padding-top: 0.2em;
    padding-left: 0.3em;
    padding-right: 0.3em;
    padding-bottom: 0.2em;
    font-size: 0.85rem;
    line-height: 1.78rem;
`;

class CodeSnippet extends PureComponent {
  render() {
    return (
      <StyledCode>{this.props.children}</StyledCode>
    );
  }
}

export default CodeSnippet;
