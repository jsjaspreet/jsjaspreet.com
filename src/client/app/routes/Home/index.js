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
  background: #f907fc linear-gradient(315deg, #f907fc 0%, #05d6d9 74%);
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
