import React, { Component } from 'react'
import styled from 'styled-components'
import ScrollUp from 'react-scroll-up'
import { FaArrowCircleOUp as UpArrow } from 'react-icons/lib/fa'
import { Switch, Route } from 'react-router-dom'
import {
  Footer,
  Header,
} from './components'
import {
  Home,
} from './routes'

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

class App extends Component {
  render() {
    return (
      <MainDiv>
        <Header/>
        <ScrollUp showUnder={160}>
          <UpArrow size={40}/>
        </ScrollUp>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
        <Footer/>
      </MainDiv>
    )
  }
}

export default App