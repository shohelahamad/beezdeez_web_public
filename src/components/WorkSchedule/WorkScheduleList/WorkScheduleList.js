import React, { Component } from 'react';
// import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import WorkScheduleListItem from '../WorkScheduleListItem/WorkScheduleListItem'

const WorkScheduleList = props => {
  return (
      <div>
        <table>
          <tbody>
          {props.schedules.map(item =>
            <WorkScheduleListItem
              itemKey={item.key}
              workingDate={item.workingDate}
              startTime={item.image}
              endTime={item.todoTitle}
              note={item.todoDescribtion}
              onEditSchedule={props.onScheduleEdit}
              {...item}
            />
          )}
        </tbody>
      </table>
      </div>
  );
};

export default WorkScheduleList;
// onEditSchedule={(key,workingDate,startTime,endTime,note) => props.onScheduleEdit(key,workingDate,startTime,endTime,note)}
