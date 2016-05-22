import React from 'react';
import {Link} from 'react-router';
import Rollover from 'components/rollover';
import Rolls from 'pages/main/rollover_data';

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

          <Rollover title='Yes, really — nothing else' content={Rolls.roll1}/>
          <Rollover title='I just want it. Why should I get checked?' content={Rolls.roll2}/>
        </div>
      </div>
    );
  }
}
