import React, { Component } from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import ScrollUp from 'react-scroll-up';
import UpArrow from 'react-icons/lib/fa/arrow-circle-o-up';
import { Switch, Route } from 'react-router-dom';
import {
  Footer,
  Header,
} from './components';
import {
  Home,
  Contact,
  Blog,
  NotFound
} from './routes';

ReactGA.initialize('UA-117595740-1');

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
`;

const ClassedUpArrow = ({ className }) => <UpArrow className={className} size={40}/>;
const StyledArrow = styled(ClassedUpArrow)`
  color: aliceblue;
  @media (max-width: 830px) {
    color: rgba(200,200,200,0.7);
  } 
`;

class App extends Component {
  render() {
    return (
      <MainDiv>
        <Header/>
        <ScrollUp showUnder={160}>
          <StyledArrow/>
        </ScrollUp>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/contact" exact component={Contact}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer/>
      </MainDiv>
    );
  }
}

export default App;