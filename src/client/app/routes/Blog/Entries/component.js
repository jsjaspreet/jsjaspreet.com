import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import LessonsFirstJob from './LessonsFirstJob';
import OptimizingWebpackBundles from './OptimizingWebpackBundles';

class BlogEntries extends PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/blog/3-lessons-from-my-first-job" component={LessonsFirstJob}/>
        <Route path="/blog/optimizing-webpack-bundles-for-production" component={OptimizingWebpackBundles}/>
      </Switch>
    );
  }
}

export default withRouter(BlogEntries);
