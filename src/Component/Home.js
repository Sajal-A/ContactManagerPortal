import React, { Component } from 'react'
import logo from './pexels.jpg';
import './Style.css';

class Home extends Component {
    render() {
        return (
            <div className='custome-home' >
                <div className="container mt-5">
                    <h1>Welcome to Contact Management Portal</h1>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>This is a Full Stack Application <br />using React & SpringBoot</p>
                </div>
            </div>
        )
    }
}

export default Home