import {render} from 'react-dom';
import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import App from 'components/App';

const router =<Router history={browserHistory}>
  <Route path="/" component={App}>
  </Route>
</Router>

document.addEventListener('DOMContentLoaded', () => {
  render(router, document.querySelector('#app'));
});
