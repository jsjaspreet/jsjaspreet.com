import React, { Component } from 'react'
import { Footer, Header } from '../components'

class DefaultLayout extends Component {
  render() {
    const { children } = this.props
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header/>
        <div style={{ flexGrow: 1 }}>
          {children()}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default DefaultLayout