import React, { Component } from 'react';

class MainApp extends Component{
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
            />
          </div>
          <button
            type="button"
            className="btn btn-success">
            Add Reminder
          </button>
        </div>
      </div>
    )
  }
}

export default MainApp;