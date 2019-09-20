import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import * as actions from '../../store/actions/index';
import grad from '../../assets/styles/BsGrad.css';
import box from '../../assets/styles/BsBox.css';

class Profile extends Component {
  componentDidMount(){
    this.props.onLoadProfile(this.props.userId,this.props.token);
  }
    render () {
        return (
            <div className={grad.container}>
              <div className={grad.row}>
                <div className={grad.col_12}>
                  <div className={box.box}>
                    <div className={box.box_middle}>
                      <ProfileInfo
                        profile_email={this.props.userEmail}
                        firstName={this.props.firstName}
                        lastName={this.props.lastName}
                        designation={this.props.designation}
                      />
                    </div>
                  </div>
                </div>
              </div>
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
