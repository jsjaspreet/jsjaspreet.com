import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: #f92300;
  text-decoration: none;
  text-rendering: optimizeLegibility;
  font-family: 'Merriweather', serif;
  font-weight: 300;
  word-wrap: break-word;
`;

class BlogLink extends PureComponent {
  render() {
    return (
      <StyledLink href={this.props.href}>
        {this.props.children}
      </StyledLink>
    );
  }
}

export default BlogLink;