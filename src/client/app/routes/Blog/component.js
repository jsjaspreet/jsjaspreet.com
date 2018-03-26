import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Loading, BlogGrid } from '../../components';

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
    // if no db, keep loading component
    if (!this.state.db) {
      return (
        <Fragment>
          <Helmet>
            <title>JS - Blog</title>
          </Helmet>
          <Loading/>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <Helmet>
          <title>JS - Blog</title>
        </Helmet>
        <BlogLayout>
          <BlogGrid>
            <div itemHeight={300} style={{ height: 300, width: 300, background: 'red' }}>BOUT</div>
            <div itemHeight={300} style={{ height: 300, width: 300, background: 'gray' }}>TO</div>
            <div itemHeight={300} style={{ height: 300, width: 300, background: 'white' }}>DROP</div>
            <div itemHeight={300} style={{ height: 300, width: 300, background: 'green' }}>WISDOM</div>
          </BlogGrid>
        </BlogLayout>
      </Fragment>
    );
  }
}

export default BlogPage;
