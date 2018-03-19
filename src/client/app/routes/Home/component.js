import React from 'react'
import styled from 'styled-components'
import { HomeBlock } from '../../components'

const HomeLayout = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: dodgerblue;
`


const IndexPage = () => {
  return (
    <HomeLayout>
      <HomeBlock/>
    </HomeLayout>
  )
}

export default IndexPage
