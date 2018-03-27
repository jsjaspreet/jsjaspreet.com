import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import LessonsFirstJob from './LessonsFirstJob';

class BlogEntries extends PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/blog/3-lessons-from-my-first-job" component={LessonsFirstJob}/>
      </Switch>
    );
  }
}

export default withRouter(BlogEntries);
