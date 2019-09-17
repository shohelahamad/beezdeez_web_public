import React, { Component } from 'react';
// import axios from 'axios';
import { Route, Link } from 'react-router-dom';

class Navbar extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            { this.props.isAuth ? <li><Link to="/profile">Profile</Link></li> : null}
                            { !this.props.isAuth ?  <li><Link to={{
                                pathname: '/register',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>Login/Register</Link></li> : <li><Link to={{
                                pathname: '/logout',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>Logout</Link></li>}
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Navbar;
