import React, { Component } from 'react';
// import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import WorkScheduleListItem from '../WorkScheduleListItem/WorkScheduleListItem'

class WorkScheduleList extends Component {
    render () {
        return (
            <div className="Blog">
              <WorkScheduleListItem />
            </div>
        );
    }
}

export default WorkScheduleList;
