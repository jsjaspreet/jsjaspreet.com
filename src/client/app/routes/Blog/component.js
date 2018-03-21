import React, { PureComponent } from 'react';
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
    console.log(this.state)
    return (
      <BlogLayout>
        Blog
      </BlogLayout>
    );
  }
}

export default BlogPage;
