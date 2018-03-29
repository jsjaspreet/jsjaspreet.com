import React, { PureComponent } from 'react';
import styled from 'styled-components';
import InboxIcon from 'react-icons/lib/fa/inbox';
import GithubIcon from 'react-icons/lib/fa/github';
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square';

const ContactIcons = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
`;

const iconSize = 50;
const iconStyle = { color: 'aliceblue' };

class ContactLinks extends PureComponent {
  render() {
    return (
      <ContactIcons>
        <a href="mailto:singh.jaspreeet@gmail.com">
          <InboxIcon style={iconStyle} size={iconSize}/>
        </a>
        <a href="https://www.github.com/jsjaspreet">
          <GithubIcon style={iconStyle} size={iconSize}/>
        </a>
        <a href="https://www.linkedin.com/in/jsjaspreet">
          <LinkedInIcon style={iconStyle} size={iconSize}/>
        </a>
      </ContactIcons>
    );
  }
}

export default ContactLinks;