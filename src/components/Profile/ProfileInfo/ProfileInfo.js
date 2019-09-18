import React, { Component } from 'react';
// import axios from 'axios';
import Button from '../../../components/UI/Button/Button';
import { Route, Link } from 'react-router-dom';

const ProfileInfo = (props) => (
    <div>
      <h4>Welcome {props.firstName} {props.lastName} {props.designation}</h4>
      <p>You are logged in with </p>
      <h3>{props.profile_email}</h3>
      <Button><Link to="/editprofile">Edit Profile</Link></Button>
      <Button><Link to="/schedules">Work Schedule</Link></Button>
    </div>
);

export default ProfileInfo;
