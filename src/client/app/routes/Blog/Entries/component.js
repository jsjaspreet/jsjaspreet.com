import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import LessonsFirstJob from './LessonsFirstJob';
import OptimizingWebpackBundles from './OptimizingWebpackBundles';
import ReflectionsOnCal from './ReflectionsOnCal';
import Review2016 from './Review2016';

class BlogEntries extends PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/blog/3-lessons-from-my-first-job" component={LessonsFirstJob}/>
        <Route path="/blog/optimizing-webpack-bundles-for-production-react-apps" component={OptimizingWebpackBundles}/>
        <Route path="/blog/reflections-on-cal" component={ReflectionsOnCal}/>
        <Route path="/blog/2016-in-review" component={Review2016}/>
      </Switch>
    );
  }
}

export default withRouter(BlogEntries);
