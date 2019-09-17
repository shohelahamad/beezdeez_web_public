import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import ProfileInfo from './ProfileInfo/ProfileInfo'
class Profile extends Component {
    render () {
        return (
            <div className="Blog">
              <ProfileInfo profile_email={this.props.userEmail}></ProfileInfo>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userEmail: state.authinfo.emailId
    };
};

export default connect( mapStateToProps, null )( Profile );
