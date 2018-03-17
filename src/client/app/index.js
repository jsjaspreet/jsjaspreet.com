import React, { Component } from 'react'
import ScrollUp from 'react-scroll-up'
import { FaArrowCircleOUp as UpArrow } from 'react-icons/lib/fa'
import { Switch, Route } from 'react-router-dom'
import {
  Home,
} from './routes'

class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <ScrollUp showUnder={160}>
          <UpArrow size={40}/>
        </ScrollUp>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </div>
    )
  }
}

export default App