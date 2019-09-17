import React, {Component} from 'react';
import { connect } from 'react-redux';
import WorkScheduleList from './WorkScheduleList/WorkScheduleList';
import * as actions from "../../store/actions/actionTypes";
import Button from '../../components/UI/Button/Button';
import { Route, Link } from 'react-router-dom';
// import { getTodos } from "../../store/actions/index";
// import { getLabels } from "../../store/actions/index";
// import { getEvents } from "../../store/actions/index";

class TimeTable extends Component {
  // componentDidMount(){
  //   this.props.onLoadTodos();
  //   this.props.onLoadLabels();
  //   this.props.onLoadEvents();
  // }
  doneSelectedHandler = key => {
    const selTodo = this.props.todos.find(todo => {
      return todo.key === key;
    });
    this.props.onDdoneTodo(selTodo.key);
  }
  itemSelectedHandler = key => {
    const selTodo = this.props.todos.find(todo => {
      return todo.key === key;
    });
  };

  render() {
    return (
      <div>
        <WorkScheduleList/>
        {/* <TimeTableList
          todos={this.props.todos}
          onItemSelected={this.itemSelectedHandler}
          onDoneSelected={this.doneSelectedHandler}
        /> */}
        <Button><Link to="/addschedule">Add New Schedule</Link></Button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    timetables: state.authinfo.token
  };
};
// const mapDispatchToProps = dispatch => {
//   return {
//     // onDdoneTodo: key => dispatch(doneTodo(key)),
//     // onLoadTodos: () => dispatch(getTodos()),
//     // onLoadLabels: () => dispatch(getLabels()),
//     // onLoadEvents: () => dispatch(getEvents())
//   };
// };
export default connect(mapStateToProps,null)(TimeTable);
