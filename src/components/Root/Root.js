import React, { Component } from 'react';
// import axios from 'axios';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import './Root.css';
import Register from '../Register/Register';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import WorkSchedule from '../WorkSchedule/WorkSchedule';
import EventAndMeeting from '../EventAndMeeting/EventAndMeeting';
import InputWorkSchedule from '../WorkSchedule/InputWorkSchedule';
import EditProfile from '../Profile/EditProfile/EditProfile';
import Logout from '../Register/Logout/Logout';
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux';
class Root extends Component {
    render () {
      // let routs =(
      //   <div>
      //     <Route path="/" exact component={Home} />
      //     <Route path="/register" component={Register} />
      //     <Redirect to="/" />
      //   </div>
      // );
      // if ( this.props.isAuthenticated ){
      //   routs =(
      //     <div>
      //       <Route path="/" exact component={Home} />
      //       <Route path="/profile" component={Profile} />
      //       <Route path="/logout" component={Logout} />
      //       <Route path="/editprofile" component={EditProfile} />
      //       <Route path="/schedules" component={WorkSchedule} />
      //       <Route path="/addschedule" component={InputWorkSchedule} />
      //     </div>
      //   );
      // }
        return (
            <div className="Blog">
                <Navbar isAuth={this.props.isAuthenticated}>
                </Navbar>
                {/* {routs} */}
                <Route path="/" exact component={Home} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/register" component={Register} />
                <Route path="/logout" component={Logout} />
                <Route path="/editprofile" component={EditProfile} />
                <Route path="/schedules" component={WorkSchedule} />
                <Route path="/addschedule" component={InputWorkSchedule} />
                <Route path="/events" component={EventAndMeeting} />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.authinfo.token !== null
    };
};

export default connect( mapStateToProps, null )( Root );
