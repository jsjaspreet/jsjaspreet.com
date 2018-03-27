import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledArticle = styled.article`
  max-width: 42rem;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 1.5rem 1.125rem;
  flex-direction: column;
  background: whitesmoke;
  flex-grow: 1;
`;

class Article extends PureComponent {
  render() {
    return (
      <StyledArticle>
        {this.props.children}
      </StyledArticle>
    );
  }
}

export default Article;