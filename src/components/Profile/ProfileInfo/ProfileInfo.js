import React, { Component } from 'react';
// import axios from 'axios';
import Button from '../../../components/UI/Button/Button';
import { Route, Link } from 'react-router-dom';

const ProfileInfo = (props) => (
    <div>
      <p>You are logged in as </p>

      <h3>{props.profile_email}</h3>
      <Button><Link to="/editprofile">Edit Profile</Link></Button>
      <Button><Link to="/schedules">Work Schedule</Link></Button>
    </div>
);

export default ProfileInfo;
