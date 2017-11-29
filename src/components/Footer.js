import React from 'react'
import { FaHeart as Heart } from 'react-icons/lib/fa'

const Footer = () => (
  <footer style={{ background: "rgba(125, 125, 125, 0.1)", alignItems: "center", justifyContent: "center", display: "flex", width: "100%" }}>
    <small>Made with</small>
    <Heart style={{ color: 'red', margin: '0 8' }} size="12"/>
    <small>in LA</small>
  </footer>
)

export default Footer
