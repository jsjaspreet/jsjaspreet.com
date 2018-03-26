import React, { PureComponent, Fragment } from 'react';
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
  background: dodgerblue;
`;

class ContactPage extends PureComponent {
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
