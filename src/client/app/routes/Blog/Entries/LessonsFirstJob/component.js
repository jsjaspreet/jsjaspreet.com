import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Code } from '../../../../components';
import styled from 'styled-components';

class BlogEntry extends PureComponent {
  componentDidMount() {
    hljs.initHighlighting();
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>JS - Blog</title>
        </Helmet>
        <h1>Hello World!</h1>
        <p>This is some paragraph text</p>
        <Code/>
      </Fragment>
    );
  }
}

export default BlogEntry;
