import React from 'react'
import styled from 'styled-components'
import HeadRoom from 'react-headroom'


const DesktopDiv = styled.div`
  display: none;
  @media (min-width: 700px) {
    display: inline;
  }
`

const MobileDiv = styled.div`
  display: none;
  @media (max-width: 699px) {
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


const SmallMenu = () => (
  <MobileDiv>
    HDS
  </MobileDiv>
)

const AppHeader = () => (
  <HeadRoom>
    <div style={{ backgroundColor: 'lightgray', minHeight: 50 }}>
      <ExpandedMenu/>
      <SmallMenu/>
    </div>
  </HeadRoom>
)

export default AppHeader