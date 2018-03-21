import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {

 render() {
    return (
        <nav className="navbar-nav">
            <Link to="/search">Search movies</Link>
        </nav>
    );
 }
}