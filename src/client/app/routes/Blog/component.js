import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Loading, BlogGrid, BlogCard } from '../../components';
import Entries from './Entries';

const BlogLayout = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f907fc linear-gradient(315deg, #f907fc 0%, #05d6d9 74%);
`;

const TopPad = styled.div`
  padding-top: 20px;
`;

class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = { db: null, currentPageNumber: 0 };
  }

  async componentDidMount() {
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
      <TopPad>
        <BlogGrid>
          {currentPage.map((preview, idx) => (
            <div key={idx}>
              <BlogCard {...preview} />
            </div>
          ))}
        </BlogGrid>
      </TopPad>
    );
    return (
      <Fragment>
        <Helmet>
          <title>JS - Blog</title>
        </Helmet>
        <BlogLayout showGradient={match.isExact}>
          {match.isExact && EntryGrid}
          <Entries/>
        </BlogLayout>
      </Fragment>
    );
  }
}

export default withRouter(BlogPage);
