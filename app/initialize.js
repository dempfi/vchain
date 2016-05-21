import {render} from 'react-dom';
import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Main from 'components/main';
import Login from 'components/login';
import Apply from 'components/apply';
import Verify from 'components/verify';

class App extends React.Component {
  render() { return <div>{this.props.children}</div>}
}

const router =<Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Main}/>
    <Route path="login" component={Login}/>
    <Route path="apply" component={Apply}/>
    <Route path="verify" component={Verify}/>
  </Route>
</Router>

document.addEventListener('DOMContentLoaded', () => {
  render(router, document.querySelector('#app'));
});
