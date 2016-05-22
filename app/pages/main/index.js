import React from 'react';
import {Link} from 'react-router';
import Rollover from 'components/rollover';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <header>Prove that you are over 18</header>
        <div className='content'>
          <Link className='link-button' to='/login'>Login with VCHAIN</Link>
          <div className='divider'>OR</div>
          <Link className='link-button' to='/verify'>Verify your age with a document</Link>

          <div className='notice'>
            The <strong>ONLY</strong> information received by PlayBoy Inc.:
            <strong>Yes or No that you are over 18</strong>
          </div>

          <Rollover title='Yes, really — nothing else' content='VChain doesn’t store any of the personal information you provided, therefore there is no way for anyone to ‘hack’ or get access to it any other way using our sistem.
  That is also a reason why we can not recreate your personal ID in case you lose it.'/>


          <Rollover title='I just want it. Why should I get checked?' content="Vchain doesn't store any personal information about you - and because we store nothing, there is no way that anyone can 'hack' or get access to you through us.

  That's also why we can't re-create your ID if you happen to lose it.

  The way we don't store information is based on our original patentied technology.

  The only thing we can do is to carry out checks and share a Yes or No result of each check you ask us to make."/>
        </div>
      </div>
    );
  }
}
