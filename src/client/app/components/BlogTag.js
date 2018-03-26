import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Tag = (color) => styled.small`
  background-color: ${color};
  font-family: 'Open Sans', sans-serif;
  padding: 2px;
  font-size: 12px;
  margin-right: 6px;
`;

const TypeToColor = {
  career: 'rgba(63, 191, 191, 0.4)',
  code: 'rgba(63, 191, 63, 0.4)',
  personal: 'rgba(191, 136, 63, 0.4)',
};

class BlogTag extends PureComponent {
  render() {
    const { type } = this.props;
    const TagComponent = Tag(TypeToColor[type]);
    return (
      <TagComponent>
        {type}
      </TagComponent>
    );
  }
}

export default BlogTag;