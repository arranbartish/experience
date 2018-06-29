import React from 'react';
import {Route, IndexRoute} from 'react-router';
import About from '../pages/about/about.container';
import Main from '../templates/main/main.component';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={About}/>
    <Route path="about" component={About}/>
    <Route path="*" component={About}/>
  </Route>
);
