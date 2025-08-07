import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Style.css';
import logo from './ibs.png'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg custom-navbar">
                <Link className="navbar-brand" to="/">Contact Manager</Link>
                <img className='img' src={logo} alt = 'logo'/>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="addcontact">New Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contactlist">List Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">About US</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar