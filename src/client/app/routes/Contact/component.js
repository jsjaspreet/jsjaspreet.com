import React, { PureComponent } from 'react';
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
      <ContactLayout>
        <ContactLinks/>
      </ContactLayout>
    );
  }
}

export default ContactPage;
