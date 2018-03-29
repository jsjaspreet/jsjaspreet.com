import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingLayout = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 40px;
  align-items: center;
  background-color: #f907fc;
  background-image: linear-gradient(315deg, #f907fc 0%, #05d6d9 74%);
`;

const Rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;


const LoadingDiv = styled.div`
  border-radius: 50%;
  width: 10em;
  height: 10em;
  margin: 60px auto;
  font-size: 8px;
  border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #ffffff;
  transform: translateZ(0);
  animation: ${Rotate} 1.1s infinite linear;
`;

class LoadingComponent extends PureComponent {
  render() {
    return (
      <LoadingLayout>
        <LoadingDiv/>
      </LoadingLayout>
    );
  }
}

export default LoadingComponent;


