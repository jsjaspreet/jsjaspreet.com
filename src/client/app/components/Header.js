import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';


const CenteringHeader = styled.header`
  display: flex;
  align-items: center;
  min-height: 55px;
  justify-content: center;
  width: 100%;
  background: lightsteelblue;
`;

const HeaderContent = styled.div`
  max-width: 992px;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
`;

const RightNav = styled.nav`
  display: flex;
  align-self: center;
`;

const linkStyle = {
  marginLeft: 10,
  color: 'black',
  textDecoration: 'none',
  marginRight: 10,
  cursor: 'pointer',
  fontFamily: '\'Open Sans\', sans-serif',
};

class Header extends PureComponent {
  render() {
    return (
      <CenteringHeader>
        <HeaderContent>
          <Link to="/">
            <img style={{ height: 50, marginLeft: 4, marginTop: 2 }} src={logo}/>
          </Link>
          <RightNav>
            <Link style={linkStyle} to="/blog">Blog</Link>
            <Link style={linkStyle} to="/contact">Contact</Link>
          </RightNav>
        </HeaderContent>
      </CenteringHeader>
    );
  }
}

export default Header;
