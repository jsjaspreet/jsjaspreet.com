import React from 'react'
import styled from 'styled-components'
import { Tagline } from '../../components'
import background from '../../assets/background.jpg'

const Home = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  @media(max-width: 399px) {
    background: whitesmoke;
  }
  @media(min-width: 400px) {
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
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
