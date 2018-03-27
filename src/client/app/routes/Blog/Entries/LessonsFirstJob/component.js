import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Code, Article } from '../../../../components';

class BlogEntry extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>JS - Blog</title>
        </Helmet>
        <Article>
          <h1>Hello World!</h1>
          <p>This is some paragraph text</p>
          <Code/>
        </Article>
      </Fragment>
    );
  }
}

export default BlogEntry;
