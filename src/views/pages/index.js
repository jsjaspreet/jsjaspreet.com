import React from 'react'
import styled from 'styled-components'
import { Tagline } from '../../components/index'

const Home = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  @media(max-width: 399px) {
    background: whitesmoke;
  }
  @media(min-width: 400px) {
    background: url(/background.jpg) no-repeat center center fixed;
    background-size: cover;
  }
`


const IndexPage = () => (
  <Home>
    <Tagline/>
  </Home>
)

export default IndexPage
