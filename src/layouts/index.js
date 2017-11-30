import React, { Component } from 'react'
import { Footer, Header } from '../components'
import './index.css'
import { FaArrowCircleOUp as UpArrow } from 'react-icons/lib/fa'
import ScrollUp from 'react-scroll-up'

class DefaultLayout extends Component {
  render() {
    const { children } = this.props
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header/>
        {children()}
        <ScrollUp showUnder={160}>
          <UpArrow size={40}/>
        </ScrollUp>
        <Footer/>
      </div>
    )
  }
}

export default DefaultLayout