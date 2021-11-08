import React, { Component } from 'react'
import {  Navbar } from 'react-bootstrap';
import './NavBar.css'

export default class NavBar extends Component {
    render() {
        return (
            <div>    
               <Navbar>
                <label class="logo" >Connect Company</label>
                <ul>
                <li><a class="active" href="/">Home</a></li>
                <li><a href="/Login">Login</a></li>
                <li><a href="/Register">Register</a></li>
                </ul>
                </Navbar>
                           
            </div>
        )
    }
}