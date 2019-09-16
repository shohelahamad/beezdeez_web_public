import React, { Component } from 'react';
// import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './Blog.css';
import Register from '../Register/Register';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <Navbar>
                </Navbar>
                <Route path="/" exact component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </div>
        );
    }
}

export default Blog;
