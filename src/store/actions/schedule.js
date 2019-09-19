import {ADD_SCHEDULE,SET_SCHEDULES, DELETE_SCHEDULE, UPDATE_SCHEDULE} from './actionTypes';
import axios from 'axios';
export const addSchedule = (workingDate,startTime,endTime,note,userId,token) =>{

    return dispatch => {
        // dispatch(uiStartLoading());
        fetch("https://beezdeez-791a4.firebaseio.com/schedules/"+userId+".json?auth="+ token, {
            method: 'POST',
            body: JSON.stringify({
            workingDate: workingDate,
            startTime: startTime,
            endTime: endTime,
            note: note,
            }),
            })
            .catch(err => {
                console.log(err);
                alert("Something went wrong, please try again!");
                // dispatch(uiStopLoading());
            })
            .then(res => res.json())
            .then(parsedRes => {
                console.log(parsedRes);
                dispatch(getSchedules(userId,token));
                // dispatch(uiStopLoading());
            });
        };
};
export const getSchedules = (userId,token) => {
    return dispatch => {
        fetch("https://beezdeez-791a4.firebaseio.com/schedules/"+userId+"/.json?auth="+ token)
        .catch(err => {
            alert("Something went wrong, sorry :/");
            console.log(err);
        })
        .then(res => res.json())
        .then(parsedRes => {
            const schedules = [];
            if(parsedRes != null){
              for (let key in parsedRes) {
                  schedules.push({
                      ...parsedRes[key],
                      key: key
                  });
              }
            }
            dispatch(setSchedules(schedules));
        });
    };
};
export const setSchedules = schedules => {
    return {
        type: SET_SCHEDULES,
        schedules: schedules
    };
};
export const updateSchedule = (key,workingDate,startTime,endTime,note,userId,token) =>{
  return dispatch => {
      // dispatch(uiStartLoading());
      // fetch("https://beezdeez-791a4.firebaseio.com/profile/.json?auth="+ token)
      fetch("https://beezdeez-791a4.firebaseio.com/schedules/"+userId+"/"+key+"/.json", {
          method: 'PUT',
          body: JSON.stringify({
          workingDate: workingDate,
          startTime: startTime,
          endTime: endTime,
          note: note,
          }),
          })
          .catch(err => {
              console.log(err);
              alert("Something went wrong, please try again!");
              // dispatch(uiStopLoading());
          })
          .then(res => res.json())
          .then(parsedRes => {
              console.log(parsedRes);
              dispatch(getSchedules(userId,token));
              // dispatch(uiStopLoading());
          });
      };
    // return {
    //     type: UPDATE_SCHEDULE,
    //     scheduleKey: key,
    //     workingDate: workingDate,
    //     startTime: startTime,
    //     endTime: endTime,
    //     note: note,
    // };

};
export const deleteSchedule = (key,userId,token) =>{
  return dispatch => {
      // dispatch(uiStartLoading());
      fetch("https://beezdeez-791a4.firebaseio.com/schedules/"+userId+"/"+key+".json", {
          method: 'DELETE'
          })
          .catch(err => {
              console.log(err);
              alert("Something went wrong, please try again!");
              // dispatch(uiStopLoading());
          })
          .then(res => res.json())
          .then(parsedRes => {
              console.log(parsedRes);
              dispatch(getSchedules(userId,token));
              // dispatch(uiStopLoading());
          });
      };
    // return{
    //     type: DELETE_SCHEDULE,
    //     scheduleKey: key
    // };
};
