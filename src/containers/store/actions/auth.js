import axios from 'axios';
import { TRY_AUTH, AUTH_SET_TOKEN, AUTH_REMOVE_TOKEN } from "./actionTypes";
export const tryAuth = (email, password) => {
  return dispatch => {
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAH0r6YSDdKK198ubG1WGsL2XmG6K7ykFM";
      // if (!isSignup) {
      //     url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAH0r6YSDdKK198ubG1WGsL2XmG6K7ykFM';
      // }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .catch(err => {
        console.log(err);
        alert("Authentication failed, please try again!");
      })
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
        if (!parsedRes.idToken) {
          alert("Authentication failed, please try again!");
        } else {
          // dispatch(
          //   authStoreToken(
          //     parsedRes.idToken,
          //     parsedRes.expiresIn,
          //     parsedRes.refreshToken
          //   )
          // );
          // startMainTabs();
          console.log("I am submitted")
        }
      });
  };
};

//
// export const auth = (email, password, isSignup) => {
//     return dispatch => {
//         // dispatch(authStart());
//         const authData = {
//             email: email,
//             password: password,
//             returnSecureToken: true
//         };
//         let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAH0r6YSDdKK198ubG1WGsL2XmG6K7ykFM';
//         if (!isSignup) {
//             url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAH0r6YSDdKK198ubG1WGsL2XmG6K7ykFM';
//         }
//         axios.post(url, authData)
//             .then(response => {
//                 console.log(response);
//                 // dispatch(authSuccess(response.data.idToken, response.data.localId));
//             })
//             .catch(err => {
//                 console.log(err);
//                 // dispatch(authFail(err));M
//             });
//     };
// };
