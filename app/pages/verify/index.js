import React from 'react';
import {Link} from 'react-router';

export default class Verify extends React.Component {
  render() {
    return (
      <div>

        <header>Verify your age with a document</header>

        <div className='content'>

          <div className='step-header'>Step 1 of 3</div>
          <div className='step-header red-text'>Your ID picture is not clear enough</div>
          <div className='step-description'>
            <strong>Take a photo of your document photo page</strong>
            <div>(to make sure you have it)</div>
          </div>

          <div className='step-user-img'></div>

          <div className='take-photo'></div>

          <div className='steps-counter'>
            <span className='done-on'>1</span>
            <span>2</span>
            <span>3</span>
          </div>

          <div className='can-you-reed'>
            <div className='can-you-reed-title'>Can you read your ID on this photo?</div>
            <button className='button white width-50 margin-right-2'>No, retake it</button>
            <button className='button width-50'>Yes, it’s clear</button>
          </div>

          <div className='success-ico'></div>
          <div className='success-title'>You can proceed</div>
          <div className='success-text'>We have verified your age — and all the information you provided, including the pictures, was delated. If you wish to log in without going through the check next time, take a few seconds to request a VChain ID.</div>

          <Link className='already-have-id' to='/login'>I already have a VChain ID</Link>

          <div className='get-id'>
            <a className='red-and-border'>Get a VChain ID</a>
          </div>

        </div>

      </div>
    );
  }
}
