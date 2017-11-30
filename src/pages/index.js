import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Home = styled.div`
  flex-grow: 1;
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
    <h1>Honey Dummy Store</h1>
    <p>Welcome to the static honey dummy store.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Home>
)

export default IndexPage
