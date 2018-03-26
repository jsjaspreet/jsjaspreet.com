import React, { PureComponent } from 'react';
import { CSSGrid, makeResponsive, layout } from 'react-stonecutter';

const Grid = makeResponsive(CSSGrid, { maxWidth: 992 });

class BlogGrid extends PureComponent {
  render() {
    return (
      <Grid
        columnWidth={300}
        layout={layout.pinterest}
        gutterWidth={10}
        duration={500}
        gutterHeight={10}
      >
        {this.props.children}
      </Grid>
    );
  }
}

export default BlogGrid;
