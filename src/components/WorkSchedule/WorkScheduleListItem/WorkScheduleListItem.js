import React, { Component } from 'react';
// // import axios from 'axios';
// import { Route, Link } from 'react-router-dom';

export default class WorkScheduleListItem extends Component {
  constructor(props)
  {
    super(props);
    this.state ={isEdit:false}
    this.editSchedule = this.editSchedule.bind(this);
    this.editScheduleSubmit = this.editScheduleSubmit.bind(this);
    this.deleteSchedule = this.deleteSchedule.bind(this);
  }
  deleteSchedule(){
    const {id} = this.props.Schedule;
    this.props.deleteSchedule(id);
  }
  editSchedule(){
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }))
  }
  editScheduleSubmit(){
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }));
    this.props.onEditSchedule(this.props.itemKey,this.workingDateInput.value,this.startTimeInput.value,this.endTimeInput.value,this.noteInput.value);
  }
    render() {
      return (
        this.state.isEdit === true ?

        <tr className="bg-warning" key={this.props.itemKey}>
          <td><input type="date" ref={workingDateInput => this.workingDateInput = workingDateInput} defaultValue ={this.props.workingDate}/></td>
          <td><input defaultValue={this.props.startTime} ref={startTimeInput => this.startTimeInput = startTimeInput}/></td>
          <td><input ref={endTimeInput => this.endTimeInput = endTimeInput} defaultValue={this.props.endTime}/></td>
          <td><input ref={noteInput => this.noteInput = noteInput} defaultValue={this.props.note}/></td>
          <td><button className="far fa-save" onClick={this.editScheduleSubmit}>Save</button></td>
          <td><button className="fas fa-trash">Delete</button></td>
        </tr>
        :
        <tr key={this.props.itemKey}>
          <td>{this.props.workingDate}</td><td>{this.props.startTime}</td><td>{this.props.endTime}</td><td>{this.props.note}</td>
          <td><button className="far fa-edit" onClick={this.editSchedule}>edit</button></td>
          <td><button className="fas fa-trash" onClick={this.deleteSchedule}>Delete</button></td>
        </tr>
      );
    }
  }
