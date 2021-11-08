import React, { Component } from 'react'
import './Welcome.css'
import photo from '../images/connect-com-1.jpg'

 class Welcome extends Component {
    render() {
        return (
                <div>
                <img id="image-container" src={photo} alt="welcome"/> 
                </div>  
        )
    }
}
export default Welcome;