import React, { PureComponent } from 'react';
import slug from 'slug';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Tag from './BlogTag';

const Preview = styled.div`
  max-width: 200px;
  cursor: pointer;
  padding: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  background: aliceblue;
`;

const Title = styled.h1`
  font-family: 'Roboto Mono', monospace;
  font-size: 20px;
  margin-bottom: 6px;
`;

const Date = styled.small`
  font-family: 'Open Sans', sans-serif;
  font-size: 10px;
  margin-bottom: 16px;
`;

const Read = styled.small`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  align-self: flex-end;
`;

const Tags = styled.div`
  display: flex;
`;

class BlogCard extends PureComponent {
  render() {
    const { title, tags = [], date } = this.props;
    return (
      <Link style={{ textDecoration: 'none', color: 'black' }} to={`/blog/${slug(title).toLowerCase()}`}>
        <Preview>
          <Title>{title}</Title>
          <Date>{date}</Date>
          <Tags>
            {
              tags.map((tag, idx) => <Tag key={idx} type={tag}/>)
            }
          </Tags>
          <Read>read</Read>
        </Preview>
      </Link>
    );
  }
}

export default BlogCard;