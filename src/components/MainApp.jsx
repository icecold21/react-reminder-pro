import React, { Component } from 'react';
// connect to the global state
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'; long
import { addReminder } from '../actions';

class MainApp extends Component{
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  addReminder() {
    // see the function mapped to component.
    console.log('this', this);
    this.props.addReminder(this.state.text);
  }

  render() {
    return (
      <div className='App'>
        <div className='title'>
          Reminder Pro
        </div>

        <div className='font-inline'>
          <div className='form-group'>
            <input
              className='form-control'
              placeholder='I have to...'
              onChange={ event => this.setState({ text: event.target.value })}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}>
            Add Reminder
          </button>
        </div>
      </div>
    )
  }
}

// long
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addReminder }, dispatch);
// }

export default connect(null, { addReminder }) (MainApp);