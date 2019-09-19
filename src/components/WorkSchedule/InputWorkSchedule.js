import React, { Component } from 'react';
// import axios from 'axios';
import { Route, Link, Redirect} from 'react-router-dom';
import ScheduleInput from './ScheduleInput/ScheduleInput';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class InputWorkSchedule extends Component {

scheduleAddedHandler = (workingDate, startTime, endTime,note)=> {
  this.props.onAddSchedule(workingDate, startTime, endTime,note,this.props.userId,this.props.token);
  this.renderRedirect();
}

renderRedirect = () => {
  this.props.history.push("/schedules");
}

render () {
    return (
        <div>
            <ScheduleInput
            onScheduleAdded={this.scheduleAddedHandler}/>
        </div>
    );
  }
}
const mapStateToProps = state => {
    return {
        token: state.authinfo.token,
        userId: state.authinfo.userId
    };
};
const mapDispatchToProps = dispatch => {
return {
    onAddSchedule: (workingDate,startTime,endTime,note,userId,token) =>
    dispatch(actions.addSchedule(workingDate,startTime,endTime,note,userId,token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputWorkSchedule);
