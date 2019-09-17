import React, { Component } from 'react';
// import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './Root.css';
import Register from '../Register/Register';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Logout from '../Register/Logout/Logout';
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux';
class Root extends Component {
    render () {
        return (
            <div className="Blog">
                <Navbar isAuth={this.props.isAuthenticated}>
                </Navbar>
                <Route path="/" exact component={Home} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/register" component={Register} />
                <Route path="/logout" component={Logout} />
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
