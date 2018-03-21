import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollUp from 'react-scroll-up';
import { FaArrowCircleOUp as UpArrow } from 'react-icons/lib/fa';
import { Switch, Route } from 'react-router-dom';
import {
  Footer,
  Header,
} from './components';
import {
  Home,
  Blog,
} from './routes';

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <MainDiv>
        <Header/>
        <ScrollUp showUnder={160}>
          <UpArrow style={{ color: 'aliceblue' }} size={40}/>
        </ScrollUp>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/blog" exact component={Blog}/>
        </Switch>
        <Footer/>
      </MainDiv>
    );
  }
}

export default App;