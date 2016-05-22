import React from 'react';
import {Link} from 'react-router';
import Rollover from 'components/rollover';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <header>Log in with your VChain ID</header>
        <div className='content'>

          <label>Your Email
            <input type='email'/>
            <div className='error-text'>Incorrect email format</div>
          </label>

          <label>Password
            <input type='password'/>
            <a className='red-and-border forgot-password'>I forgot</a>
          </label>

          <div className='notice'>
            The ONLY information received by PlayBoy Inc.:
            <strong>Yes or No that you are over 18</strong>
          </div>

          <Rollover title='Yes, really — nothing else' content='VChain doesn’t store any of the personal information you provided, therefore there is no way for anyone to ‘hack’ or get access to it any other way using our sistem.
  That is also a reason why we can not recreate your personal ID in case you lose it.'/>

          <button className='button'>Enter PlayBoy</button>

          <div className='get-id'>
            <Link className='red-and-border' to='/apply'>
              Get a VChain ID
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
