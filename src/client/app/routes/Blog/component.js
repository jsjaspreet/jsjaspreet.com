import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Loading, BlogGrid, BlogCard } from '../../components';

const BlogLayout = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  background: dodgerblue;
`;

class BlogPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { db: null, currentPageNumber: 0 };
  }

  async componentWillMount() {
    const db = await import(/* webpackChunkName: "db" */ '../../database/dao.js');
    this.setState({ db: db.default });
  }

  render() {
    const { db, currentPageNumber } = this.state;
    const { match } = this.props;

    // if no db, keep loading component
    if (!db) {
      return (
        <Fragment>
          <Helmet>
            <title>JS - Blog</title>
          </Helmet>
          <Loading/>
        </Fragment>
      );
    }

    const currentPage = db.getPage(currentPageNumber);
    const EntryGrid = (
      <BlogGrid>
        {currentPage.map((preview, idx) => (
          <div key={idx}>
            <BlogCard {...preview} />
          </div>
        ))}
      </BlogGrid>
    );
    return (
      <Fragment>
        <Helmet>
          <title>JS - Blog</title>
        </Helmet>
        <BlogLayout>
          {match.isExact && EntryGrid}
        </BlogLayout>
      </Fragment>
    );
  }
}

export default withRouter(BlogPage);
