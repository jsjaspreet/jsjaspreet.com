import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const BlogLayout = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: dodgerblue;
`;

class BlogPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { db: null };
  }

  async componentWillMount() {
    const db = await import(/* webpackChunkName: "db" */ '../../database/dao.js');
    this.setState({ db });
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>JS - Blog</title>
        </Helmet>
        <BlogLayout>
          Blog
        </BlogLayout>
      </Fragment>
    );
  }
}

export default BlogPage;
