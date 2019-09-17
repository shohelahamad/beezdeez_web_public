import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    firstName: null,
    lastName: null,
    designation: null,
};

const editprofileSuccess = (state, action) => {
    return updateObject( state, {
        firstName: action.firstName,
        lastName: action.lastName,
        designation: action.designation
     } );
};
const setprofile = (state, action) => {
    return updateObject( state, {
        firstName: action.firstName,
        lastName: action.lastName,
        designation: action.designation
     } );
};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.EDIT_PROFILE:
          return editprofileSuccess(state, action);
        case actionTypes.SET_PROFILE:
          return setprofile(state, action);
        default:
            return state;
    }
};

export default reducer;
