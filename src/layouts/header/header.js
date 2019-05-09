import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <nav className="nav">
            <NavLink to={'/home'} className="nav-link" activeClassName="active">Home</NavLink>
            <NavLink to={'/profile'} className="nav-link">Profile</NavLink>
            <NavLink to={'/portfolio'} className="nav-link">Portfolio</NavLink>
          </nav>
        </div>
      </header>
    )
  }
}