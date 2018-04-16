import React, { PureComponent, Fragment } from 'react';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import NotFoundImage from './NotFound.gif';

const MainLayout = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  align-items: center;
  background: black;
`;

class ContactPage extends PureComponent {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>JS</title>
        </Helmet>
        <MainLayout>
          <img style={{ width: 500, maxWidth: '100%', height: 500 }} src={NotFoundImage}/>
        </MainLayout>
      </Fragment>
    );
  }
}

export default ContactPage;
