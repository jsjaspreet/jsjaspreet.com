import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';

const StyledCode = styled.code`
  line-height: 1.42;
  border-radius: 3px;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  font-family: 'Source Code Pro', monospace;
  font-size: 0.85rem;
`;

class Code extends PureComponent {
  componentDidMount() {
    hljs.highlightBlock(findDOMNode(this.refs.code));
  }

  componentDidUpdate() {
    highlight.initHighlighting.called = false;
    highlight.highlightBlock(findDOMNode(this.refs.code));
  }

  render() {
    const {
      code = `
import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Georgia', 'serif'],
  // See below for the full list of options.
})

// Output CSS as string.
typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()
    `, language = 'js'
    } = this.props;
    return (
      <pre>
        <StyledCode ref='code' className={`hljs ${language}`}>
          {`${code}`.replace(/^\s+|\s+$/g, '')}
        </StyledCode>
        </pre>
    );
  }
}

export default Code;