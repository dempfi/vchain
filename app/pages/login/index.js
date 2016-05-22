import React from 'react';
import {Link} from 'react-router';
import Rollover from 'components/rollover';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <header>Log in with your VChain ID</header>
        <div className='body'>
          <label>Your Email</label>
          <input type='email'/>

          <label>Password</label>
          <input type='password'/>
          <a>I forgot</a>
          <span className='notice'>
            The ONLY information received by PlayBoy Inc.:
            <strong>Yes or No that you are over 18</strong>
          </span>

          <Rollover title='Yes, really — nothing else' content='VChain doesn’t store any of the personal information you provided, therefore there is no way for anyone to ‘hack’ or get access to it any other way using our sistem.
  That is also a reason why we can not recreate your personal ID in case you lose it.'/>

          <button>Enter PlayBoy</button>

          <Link className='link-button' to='/apply'>
            Get a VChain ID
          </Link>
        </div>
      </div>
    );
  }
}
