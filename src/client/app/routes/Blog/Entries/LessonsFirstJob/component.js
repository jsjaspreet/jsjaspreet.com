import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Code, Article, P, H1, Link, H2 } from '../../../../components';

class BlogEntry extends PureComponent {
  render() {
    const link = 'https://github.com/jsjaspreet';
    return (
      <Fragment>
        <Helmet>
          <title>JS - Blog</title>
        </Helmet>
        <Article>
          <H1>Hello World!</H1>
          <P>This is some paragraph text</P>
          <H2>Some smaller header</H2>
          <Link href={link}>{link}</Link>
          <Code/>
        </Article>
      </Fragment>
    );
  }
}

export default BlogEntry;
