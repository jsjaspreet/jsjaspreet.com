import React, { Component } from 'react'
import styled from 'styled-components'
import { FaBars as Bars } from 'react-icons/lib/fa'
import logo from './logo.png'
import Menu from 'react-burger-menu/lib/menus/slide'


const DesktopDiv = styled.div` display: none;
  @media (min-width: 500px) {
    display: flex;
  }
`

const MobileDiv = styled.div`
  display: none;
  @media (max-width: 499px) {
    display: flex;
    justify-content: space-between;
  }
`

const RightCorner = styled.span`
  position: absolute;
  right: 12px;
  top: 18px;
`


const Logo = () => <img style={{ marginTop: 8, marginBottom: 0, marginLeft: 12, height: 60, width: 60 }} src={logo}/>

const Name = styled.h1`
  margin: 14px
`

const ExpandedMenu = () => (
  <DesktopDiv>
    <Logo/>
    <Name>jaspreet</Name>
  </DesktopDiv>
)


class SmallMenu extends Component {

  render() {
    const { toggleMenu, isMenuOpen } = this.props
    return (
      <MobileDiv>
        <Logo/>
        {!isMenuOpen && <RightCorner onClick={toggleMenu}><Bars size={36}/></RightCorner>}
        <Menu
          right
          customBurgerIcon={false}
          isOpen={isMenuOpen}
          onStateChange={(state) => {
            if (!state.isOpen) {
              toggleMenu()
            }
          }}
        >
          <h2>Blog</h2>
          <h2>About</h2>
        </Menu>
      </MobileDiv>
    )
  }
}


class AppHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  render() {
    return (
      <div style={{ zIndex: 1, boxShadow: '0px 1px 20px 2px #ccc', backgroundColor: 'lightgray', height: 76 }}>
        <ExpandedMenu/>
        <SmallMenu
          toggleMenu={this.toggleMenu}
          isMenuOpen={this.state.isMenuOpen}
        />
      </div>
    )
  }
}

export default AppHeader