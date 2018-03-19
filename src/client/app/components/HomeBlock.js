import React from 'react'
import styled from 'styled-components'
import Tagline from './Tagline'
import background from '../assets/background.jpg'

const Home = styled.div`
  height: 450px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  @media(max-width: 399px) {
    background: whitesmoke;
  }
  @media(min-width: 400px) {
    background: url(${background}) no-repeat center;
  }
`


const IndexPage = () => {
  return (
    <Home>
      <Tagline/>
    </Home>
  )
}

export default IndexPage
