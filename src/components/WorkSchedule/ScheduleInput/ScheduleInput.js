import React, { Component } from 'react';
// import axios from 'axios';
import { Route, Link } from 'react-router-dom';

class ScheduleInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workingDate: '',
      startTime: '',
      endTime: '',
      note: ''
    };
  }

startTimeChangeHandle = (event) => {
  this.setState({
    startTime: event.target.value
  });
};
endTimeChangeHandle = (event) => {
  this.setState({ endTime: event.target.value });
}
noteChangeHandle = (event) => {
  this.setState({ note: event.target.value });
}
dateChangeHandle = (event) => {
  this.setState({ workingDate: event.target.value });
}

handleSubmit = (event) => {
  this.props.onScheduleAdded(this.state.workingDate,this.state.startTime,this.state.endTime,this.state.note);
  event.preventDefault();
}

render() {
  return(
    <form onSubmit={this.handleSubmit}>
      <div>
        <label>
          Date:
          <input type="date" value={this.state.workingDate} onChange={this.dateChangeHandle} />
        </label>
        </div>
        <div>
        <label>
          Start Time:
          <input type="time" value={this.state.startTime} onChange={this.startTimeChangeHandle} />
        </label>
      </div>
      <div>
        <label>
          End Time:
          <input type="time" value={this.state.endTime} onChange={this.endTimeChangeHandle} />
        </label>
      </div>
      <div>
        <label>
          Notes:
          <input type="text" value={this.state.note} onChange={this.noteChangeHandle} />
        </label>
      </div>
      <input type="submit" value="Save" />
    </form>
  );
}
}

export default ScheduleInput;
