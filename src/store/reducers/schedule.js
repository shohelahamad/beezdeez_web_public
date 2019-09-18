import { ADD_SCHEDULE,SET_SCHEDULES, DELETE_SCHEDULE, UPDATE_SCHEDULE } from '../actions/actionTypes';
const initialState ={
    schedules: [],
};
const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_SCHEDULES:
        return {
        ...state,
        schedules: action.schedules
        };
        case DELETE_SCHEDULE:
        return {
            ...state,
            schedules: state.schedules.filter(schedule => {
            return schedule.key !== action.scheduleKey;
            }),
            selectedSchedule: null
        };
        // case DONE_SCHEDULE:
        // return {
        //     ...state,
        //     todos: state.schedules.map(schedule =>{
        //         return schedule.key === action.todoKey?{...schedule,isDone : !schedule.isDone} : schedule
        //     }),
        //     selectedTodo: null
        // };
        case UPDATE_SCHEDULE:
        return {
            ...state,
            schedules: state.schedules.map(schedule =>{
                return schedule.key === action.scheduleKey?
                {...schedule,workingDate : action.workingDate,startTime : action.startTime,endTime : action.endTime,note : action.note}
                :
                schedule
            }),
        };
        default:
            return state;
    }

};
export default reducer;
