import React from 'react';
import {Link} from 'react-router';
import Rollover from 'components/rollover';

export default class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      error: null,
      email: null,
      pass: null
    }
  }

  validate() {
    const dummyEmailRex = /\S+@\S+\.\S+/
    const email = this.refs.email.value
    const password = this.refs.password.value
    let invalid = {
      error: false,
      email: false,
      pass: false
    }
    if (!dummyEmailRex.test(email)) {invalid.email = true}
    if (password.length < 5) {invalid.pass = true}
    if (invalid.email || invalid.pass) {invalid.error = true}
    this.setState(invalid)
  }

  reset() {
    this.setState({
      error: false,
      email: false,
      pass: false
    })
  }

  render() {
    return (
      <div>
        <header>Log in with your VChain ID</header>
        <div className='content'>

          <label className={this.state.email ? 'error' : ''}>Your Email
            <input type='email' ref='email' onFocus={this.reset.bind(this)}/>
            <div className='error-text'>Incorrect email format</div>
          </label>

          <label className={this.state.pass ? 'error' : ''}>Password
            <input type='password' ref='password' onFocus={this.reset.bind(this)}/>
            <a className='red-and-border forgot-password'>I forgot</a>
          </label>

          <div className='notice'>
            The ONLY information received by PlayBoy Inc.:
            <strong>Yes or No that you are over 18</strong>
          </div>

          <Rollover title='Yes, really — nothing else' content='VChain doesn’t store any of the personal information you provided, therefore there is no way for anyone to ‘hack’ or get access to it any other way using our sistem.
  That is also a reason why we can not recreate your personal ID in case you lose it.'/>

          <button
            className='button'
            disabled={this.state.error === true}
            onClick={this.validate.bind(this)}
          >Enter PlayBoy</button>

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
