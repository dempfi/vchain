import React from 'react';

export default class Rollover extends React.Component {
  constructor(props) {
    super(props)
    this.state = {show: false};
  }

  toggle() {
    this.setState({show: !this.state.show})
  }

  render() {
    return (
      <div className='rollover'>
        <div className='rollover-title' onClick={this.toggle.bind(this)}>{this.props.title}</div>
        {this.state.show && <div className='rollover-content'>{this.props.content}</div>}
      </div>
    );
  }
}
