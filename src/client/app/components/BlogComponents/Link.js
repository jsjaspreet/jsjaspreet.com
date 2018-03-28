import React, { PureComponent } from 'react';
import styled from 'styled-components';
import P from './P';

const StyledLink = styled.a`
  color: #f92300;
  text-decoration: none;
`;

class BlogLink extends PureComponent {
  render() {
    return (
      <StyledLink href={this.props.href}>
        <P>
          {this.props.children}
        </P>
      </StyledLink>
    );
  }
}

export default BlogLink;