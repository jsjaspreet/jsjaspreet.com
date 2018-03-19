import React from 'react'
import styled from 'styled-components'
import { FaHeart as Heart } from 'react-icons/lib/fa'

const Footer = styled.footer`
  background: rgba(125, 125, 125, 0.1);
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  font-size: 12px;
  padding-top: 3px;
  padding-bottom: 3px;
  font-weight: 300;
  font-family: 'Open Sans', sans-serif;
  box-shadow: 0px 1px 20px 2px #ccc;
`

const AppFooter = () => (
  <Footer>
    <small>Made with</small>
    <Heart style={{ color: 'red', margin: '0 8' }} size="12"/>
    <small>in LA</small>
  </Footer>
)

export default AppFooter
