import {EDIT_PROFILE, SET_PROFILE} from './actionTypes';
export const editprofile = (firstName,lastName,designation,userId,token) =>{

    return dispatch => {
        fetch("https://beezdeez-791a4.firebaseio.com/profile/"+userId+".json?auth="+ token, {
            method: 'PUT',
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
                dispatch(getprofile(userId,token));
            });
        };
};
export const getprofile = (userId,token) => {
    return dispatch => {
        fetch("https://beezdeez-791a4.firebaseio.com/profile/"+userId+"/.json?auth="+ token)
        .catch(err => {
            alert("Something went wrong");
            console.log(err);
        })
        .then(res => res.json())
        .then(parsedRes => {
          let firstName ='';
          let lastName ='';
          let designation ='';
          if (parsedRes != null){
            firstName =parsedRes.firstName;
            lastName =parsedRes.lastName;
            designation =parsedRes.designation;
          }
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
