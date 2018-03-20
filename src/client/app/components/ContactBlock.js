import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Block = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  min-height: 350px;
  max-width: 896px;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background: black;
`

const BlockText = styled.h1`
  font-size: 100px;
  color: lightskyblue;
  font-family: 'Bungee Inline', cursive;
`

class BlogBlock extends PureComponent {
  render() {
    return (
      <Block>
        <Link style={{ textDecoration: 'none'}} to="/contact">
          <BlockText>
            Contact
          </BlockText>
        </Link>
      </Block>
    )
  }
}

export default BlogBlock
