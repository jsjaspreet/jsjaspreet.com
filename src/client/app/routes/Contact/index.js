import React, { PureComponent, Fragment } from 'react';
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { ContactLinks } from '../../components';

const ContactLayout = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 40px;
  align-items: center;
  background: #f907fc linear-gradient(315deg, #f907fc 0%, #05d6d9 74%);
`;

class ContactPage extends PureComponent {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>JS - Contact</title>
        </Helmet>
        <ContactLayout>
          <ContactLinks/>
        </ContactLayout>
      </Fragment>
    );
  }
}

export default ContactPage;
