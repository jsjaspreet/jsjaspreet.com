import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
// import { Loading } from '../../components';

const BlogLayout = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  background: dodgerblue;
`;

class BlogEntry extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>JS - Blog</title>
        </Helmet>
        <BlogLayout>
          <div>Hello World!</div>
        </BlogLayout>
      </Fragment>
    );
  }
}

export default BlogEntry;
