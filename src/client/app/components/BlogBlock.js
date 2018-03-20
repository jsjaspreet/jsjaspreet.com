import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Block = styled.div`
  margin-top: 10px;
  min-height: 350px;
  max-width: 896px;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background: black;
`

const BlogText = styled.h1`
  font-size: 120px;
  color: crimson;
  font-family: 'Monoton', cursive;
`

class BlogBlock extends PureComponent {
  render() {
    return (
      <Block>
        <Link style={{ textDecoration: 'none'}} to="/blog">
          <BlogText>
            Blog
          </BlogText>
        </Link>
      </Block>
    )
  }
}

export default BlogBlock
