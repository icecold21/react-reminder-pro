import React, { Component } from 'react';
// connect to the global state
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'; long
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';

class MainApp extends Component{
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      dueDate: ''
    }
  }

  addReminder() {
    // see the function mapped to component.
    console.log('this.state.dueDate', this.state.dueDate);
    this.props.addReminder(this.state.text, this.state.dueDate);
    console.log('this.props', this.props);
  }

  deleteReminder(id) {
    // console.log('deleting in application', id);
    // console.log('this.props', this.props);
    this.props.deleteReminder(id);
  }

  renderReminders() {
    console.log('hi im here', this.props.reminders);
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-12">
        {
          reminders.map(reminder => {
            console.log("duee", reminder.dueDate);
            return (
              <li key={ reminder.id } className="list-group-item">
                <div className="list-item">
                  <div>{reminder.text}</div>
                  <div>{moment(new Date(reminder.dueDate)).fromNow()}</div>
                </div>
                <div
                  className="list-item delete-button"
                  onClick={() => this.deleteReminder(reminder.id)}
                >
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    console.log('this.props', this.props);
    return (
      <div className='App'>
        <div className='title'>
          Reminder Pro
        </div>

        <div className='font-inline reminder-from'>
          <div className='form-group col-md-12'>
            <input
              className='form-control'
              placeholder='I have to...'
              onChange={ event => this.setState({ text: event.target.value })}
            />

            <input
              className="form-control"
              type="datetime-local"
              onChange={ event => this.setState({dueDate: event.target.value})}
            />
          </div>
          <button
            type="button"
            className="btn btn-success col-md-12"
            onClick={() => this.addReminder()}>
            Add Reminder
          </button>
          <br />
          <div className='col-md-12'>
            { this.renderReminders() }
          </div>

          <div
            className='btn btn-danger'
            onClick={ () => this.props.clearReminders()}
          >
            Clear Reminders
          </div>
        </div>
      </div>
    )
  }
}

// long
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addReminder }, dispatch);
// }

function mapStateToProps(state) {
  return {
    reminders: state
  }
}

// connect component to global state
export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders }) (MainApp);