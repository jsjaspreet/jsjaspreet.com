import React, { Component } from 'react'
import styled from 'styled-components'
import { FaBars as Bars } from 'react-icons/lib/fa'
import Menu from 'react-burger-menu/lib/menus/slide'


const DesktopDiv = styled.div` display: none;
  @media (min-width: 1000px) {
    display: flex;
  }
`

const MobileDiv = styled.div`
  display: none;
  @media (max-width: 999px) {
    display: flex;
    justify-content: space-between;
  }
`

const RightCorner = styled.span`
  position: absolute;
  right: 12px;
  top: 10px;
`

const ExpandedMenu = () => (
  <DesktopDiv>
    <div>
      Honey
    </div>
    <div>
      Dummy
    </div>
    <div>
      Store
    </div>
  </DesktopDiv>
)


class SmallMenu extends Component {

  render() {
    const { toggleMenu, isMenuOpen } = this.props
    return (
      <MobileDiv>
        <span style={{ marginLeft: 20 }}>LOGO</span>
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
          <a>HDS</a>
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
      <div style={{ backgroundColor: 'lightgray', minHeight: 60 }}>
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