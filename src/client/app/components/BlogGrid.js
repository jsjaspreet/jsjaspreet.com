import React, { PureComponent } from 'react';
import { CSSGrid, makeResponsive, measureItems, layout } from 'react-stonecutter';

const Grid = makeResponsive(measureItems(CSSGrid), { maxWidth: 992 });

class BlogGrid extends PureComponent {
  render() {
    return (
      <Grid
        columnWidth={208}
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
