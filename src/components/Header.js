import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from 'react-burger-menu/lib/menus/slide'


const DesktopDiv = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: inline;
  }
`

const MobileDiv = styled.div`
  display: none;
  @media (max-width: 999px) {
    display: inline;
  }
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


const SmallMenu = ({ toggleMenu, isMenuOpen }) => (
  <MobileDiv>
    {!isMenuOpen && <div onClick={toggleMenu}>BUTTON</div>}
    <Menu
      right
      noOverlay
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
      <div style={{ backgroundColor: 'lightgray', minHeight: 50 }}>
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