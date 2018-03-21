import React, { PureComponent } from 'react'
import styled from 'styled-components'
import {
  HomeBlock,
  ContactBlock,
  BlogBlock,
} from '../../components'

const HomeLayout = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: dodgerblue;
`

class IndexPage extends PureComponent {
  render() {
    return (
      <HomeLayout>
        <HomeBlock/>
        <BlogBlock/>
        <ContactBlock/>
      </HomeLayout>
    )
  }
}

export default IndexPage
