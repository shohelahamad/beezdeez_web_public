import React, {Component} from 'react';
import { connect } from 'react-redux';
import WorkScheduleList from './WorkScheduleList/WorkScheduleList';
import * as actions from "../../store/actions/index";
import Button from '../../components/UI/Button/Button';
import { Route, Link } from 'react-router-dom';
// import { getTodos } from "../../store/actions/index";
// import { getLabels } from "../../store/actions/index";
// import { getEvents } from "../../store/actions/index";

class TimeTable extends Component {
  componentDidMount(){
    this.props.onLoadSchedule();
  }
  // itemSelectedHandler = key => {
  //   const selSchedule = this.props.schedules.find(schedule => {
  //     return schedule.key === key;
  //   });
  //   // console.log(key);
  // };
  onScheduleEditHandler = (key,workingDate,startTime,endTime,note) => {
    this.props.onEditSchedule(key,workingDate,startTime,endTime,note);
    console.log(key,workingDate,startTime,endTime,note);
  };
  onScheduleDeleteHandler = (key) => {
    this.props.onDeleteSchedule(key);
    // this.props.onEditSchedule(key);
    console.log(key);
  };

  render() {
    return (
      <div>
        <Button><Link to="/addschedule">Add New Schedule</Link></Button>
        <WorkScheduleList
          schedules={this.props.schedules}
          onItemSelected={this.itemSelectedHandler}
          onScheduleEdit={this.onScheduleEditHandler}
          onScheduleDelete={this.onScheduleDeleteHandler}
        />
        {/* <TimeTableList
          todos={this.props.schedules}
          onItemSelected={this.itemSelectedHandler}
          onDoneSelected={this.doneSelectedHandler}
        /> */}

      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    schedules: state.schedules.schedules
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadSchedule: () => dispatch(actions.getSchedules()),
    onEditSchedule: (key,workingDate,startTime,endTime,note) => dispatch(actions.updateSchedule(key,workingDate,startTime,endTime,note)),
    onDeleteSchedule: (key) => dispatch(actions.deleteSchedule(key)),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(TimeTable);
