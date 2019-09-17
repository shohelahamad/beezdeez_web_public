import {EDIT_PROFILE, SET_PROFILE} from './actionTypes';
export const editprofile = (firstName,lastName,designation,token) =>{

    return dispatch => {
        fetch("https://beezdeez-791a4.firebaseio.com/profile.json?auth=", {
            method: 'POST',
            body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            designation: designation
            }),
            })
            .catch(err => {
                console.log(err);
                alert("Something went wrong, please try again!");
            })
            .then(res => res.json())
            .then(parsedRes => {
                console.log(parsedRes);
                dispatch(getprofile(token));
            });
        };
};
export const getprofile = (token) => {
    return dispatch => {
        fetch("https://beezdeez-791a4.firebaseio.com/profile/.json?auth="+ token)
        .catch(err => {
            alert("Something went wrong, sorry :/");
            console.log(err);
        })
        .then(res => res.json())
        .then(parsedRes => {
            const firstName =parsedRes.firstName;
            const lastName =parsedRes.lastName;
            const designation =parsedRes.designation;
            dispatch(setprofile(firstName,lastName,designation));
        });
    };
};
export const setprofile = (firstName,lastName,designation) => {
    return {
        type: SET_PROFILE,
        firstName: firstName,
        lastName: lastName,
        designation: designation
    };
};
