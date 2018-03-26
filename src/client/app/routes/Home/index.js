import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import {
  HomeBlock,
  ContactBlock,
  BlogBlock,
} from '../../components';

const HomeLayout = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: dodgerblue;
`;

class IndexPage extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>jsjaspreet</title>
        </Helmet>
        <HomeLayout>
          <HomeBlock/>
          <BlogBlock/>
          <ContactBlock/>
        </HomeLayout>
      </Fragment>
    );
  }
}

export default IndexPage;
