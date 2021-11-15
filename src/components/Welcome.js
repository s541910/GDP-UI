import React, { Component } from 'react'
import './Welcome.css'
import photo from '../images/connect-comp-1.jpg'
import NavBar from './NavBar.js'

 class Welcome extends Component {
    render() {
        return (
                <div>
                <NavBar/>
                <img id="image-container" src={photo} alt="welcome"/> 
                </div>  
        )
    }
}
export default Welcome;