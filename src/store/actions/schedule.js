import {ADD_SCHEDULE,SET_SCHEDULES, DELETE_SCHEDULE, UPDATE_SCHEDULE} from './actionTypes';
// import { uiStartLoading, uiStopLoading } from './index';
export const addSchedule = (workingDate,startTime,endTime,note,token) =>{

    return dispatch => {
        // dispatch(uiStartLoading());
        fetch("https://beezdeez-791a4.firebaseio.com/schedules.json", {
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
                dispatch(getSchedules());
                // dispatch(uiStopLoading());
            });
        };
};
export const getSchedules = () => {
    return dispatch => {
        fetch("https://beezdeez-791a4.firebaseio.com/schedules/.json")
        .catch(err => {
            alert("Something went wrong, sorry :/");
            console.log(err);
        })
        .then(res => res.json())
        .then(parsedRes => {
            const schedules = [];
            for (let key in parsedRes) {
                schedules.push({
                    ...parsedRes[key],
                    key: key
                });
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
export const updateSchedule = (key,newDueDate) =>{
    return {
        type: UPDATE_SCHEDULE,
        todoKey: key,
        newDueDate: newDueDate
    };
};
export const deleteSchedule = (key) =>{
    return{
        type: DELETE_SCHEDULE,
        placeKey: key
    };
};
