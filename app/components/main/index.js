import React from 'react';
import {Link} from 'react-router';

export default class Main extends React.Component {
  render() {
    return (
      <div id="content">
        <h1>Prove that you are over 18</h1>
        <Link to="/login">Login with VCHAIN</Link>
      </div>
    );
  }
}
