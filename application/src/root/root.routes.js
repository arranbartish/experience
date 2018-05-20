import React from 'react';
import {Route} from 'react-router';
import Home from '../pages/home/home.container';
import Main from '../templates/main/main.component';

export default (
  <Route path="/" component={Main}>
    <Route path="*" component={Home}/>
  </Route>
);
