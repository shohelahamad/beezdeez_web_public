import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import * as actions from '../../store/actions/index';

class Profile extends Component {
  componentDidMount(){
    this.props.onLoadProfile(this.props.userId,this.props.token);
  }
    render () {
        return (
            <div className="Blog">
              <ProfileInfo
                profile_email={this.props.userEmail}
                firstName={this.props.firstName}
                lastName={this.props.lastName}
                designation={this.props.designation}
              />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.authinfo.token,
        userId: state.authinfo.userId,
        userEmail: state.authinfo.emailId,
        firstName: state.profile.firstName,
        lastName: state.profile.lastName,
        designation: state.profile.designation,
    };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoadProfile: (userId,token) => dispatch(actions.getprofile(userId,token))
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( Profile );
